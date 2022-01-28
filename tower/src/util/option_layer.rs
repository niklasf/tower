use tower_layer::Layer;

use crate::util::Either;

/// Crate a new [`OptionLayer`].
pub fn option_layer<L>(layer: Option<L>) -> OptionLayer<L> {
    OptionLayer::new(layer)
}

/// Wrapper for `Option<Layer>` that implements [`Layer`].
///
/// Applies the wrapped layer, if any, or only the underlying layer otherwise.
///
/// Behaves like `Either<L, Identity>`, but does not box `L::Service::Error`.
///
/// # Example
///
/// ```
/// # use std::time::Duration;
/// # use tower::Service;
/// # use tower::builder::ServiceBuilder;
/// use tower::util::OptionLayer;
/// # use tower::timeout::TimeoutLayer;
/// # async fn wrap<S>(svc: S) where S: Service<(), Error = &'static str> + 'static + Send, S::Future: Send {
/// # let timeout = Some(Duration::new(10, 0));
/// // Layer to apply a timeout if configured
/// let maybe_timeout = OptionLayer::new(timeout.map(TimeoutLayer::new));
///
/// ServiceBuilder::new()
///     .layer(maybe_timeout)
///     .service(svc);
/// # }
/// ```
#[derive(Debug)]
pub struct OptionLayer<L> {
    layer: Option<L>,
}

impl<L> OptionLayer<L> {
    /// Create a new [`OptionLayer`].
    pub fn new(layer: Option<L>) -> OptionLayer<L> {
        OptionLayer { layer }
    }
}

impl<S, L> Layer<S> for OptionLayer<L>
where
    L: Layer<S>,
{
    type Service = Either<L::Service, S>;

    fn layer(&self, inner: S) -> Self::Service {
        match &self.layer {
            Some(layer) => Either::A(layer.layer(inner)),
            None => Either::B(inner),
        }
    }
}
