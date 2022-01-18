(function() {var implementors = {};
implementors["tower"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"tower/balance/error/struct.Discover.html\" title=\"struct tower::balance::error::Discover\">Discover</a>","synthetic":true,"types":["tower::balance::error::Discover"]},{"text":"impl&lt;D, Req&gt; Freeze for <a class=\"struct\" href=\"tower/balance/p2c/struct.MakeBalanceLayer.html\" title=\"struct tower::balance::p2c::MakeBalanceLayer\">MakeBalanceLayer</a>&lt;D, Req&gt;","synthetic":true,"types":["tower::balance::p2c::layer::MakeBalanceLayer"]},{"text":"impl&lt;S, Req&gt; Freeze for <a class=\"struct\" href=\"tower/balance/p2c/struct.MakeBalance.html\" title=\"struct tower::balance::p2c::MakeBalance\">MakeBalance</a>&lt;S, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::balance::p2c::make::MakeBalance"]},{"text":"impl&lt;F, Req&gt; Freeze for <a class=\"struct\" href=\"tower/balance/p2c/struct.MakeFuture.html\" title=\"struct tower::balance::p2c::MakeFuture\">MakeFuture</a>&lt;F, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::balance::p2c::make::MakeFuture"]},{"text":"impl&lt;D, Req&gt; !Freeze for <a class=\"struct\" href=\"tower/balance/p2c/struct.Balance.html\" title=\"struct tower::balance::p2c::Balance\">Balance</a>&lt;D, Req&gt;","synthetic":true,"types":["tower::balance::p2c::service::Balance"]},{"text":"impl&lt;MS, Target, Request&gt; Freeze for <a class=\"struct\" href=\"tower/balance/pool/struct.PoolDiscoverer.html\" title=\"struct tower::balance::pool::PoolDiscoverer\">PoolDiscoverer</a>&lt;MS, Target, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;MS: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Target: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;MS as <a class=\"trait\" href=\"tower/make/trait.MakeService.html\" title=\"trait tower::make::MakeService\">MakeService</a>&lt;Target, Request&gt;&gt;::<a class=\"associatedtype\" href=\"tower/make/trait.MakeService.html#associatedtype.Future\" title=\"type tower::make::MakeService::Future\">Future</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::balance::pool::PoolDiscoverer"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/balance/pool/struct.Builder.html\" title=\"struct tower::balance::pool::Builder\">Builder</a>","synthetic":true,"types":["tower::balance::pool::Builder"]},{"text":"impl&lt;MS, Target, Request&gt; !Freeze for <a class=\"struct\" href=\"tower/balance/pool/struct.Pool.html\" title=\"struct tower::balance::pool::Pool\">Pool</a>&lt;MS, Target, Request&gt;","synthetic":true,"types":["tower::balance::pool::Pool"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/buffer/error/struct.ServiceError.html\" title=\"struct tower::buffer::error::ServiceError\">ServiceError</a>","synthetic":true,"types":["tower::buffer::error::ServiceError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/buffer/error/struct.Closed.html\" title=\"struct tower::buffer::error::Closed\">Closed</a>","synthetic":true,"types":["tower::buffer::error::Closed"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/buffer/future/struct.ResponseFuture.html\" title=\"struct tower::buffer::future::ResponseFuture\">ResponseFuture</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::buffer::future::ResponseFuture"]},{"text":"impl&lt;Request&gt; Freeze for <a class=\"struct\" href=\"tower/buffer/struct.BufferLayer.html\" title=\"struct tower::buffer::BufferLayer\">BufferLayer</a>&lt;Request&gt;","synthetic":true,"types":["tower::buffer::layer::BufferLayer"]},{"text":"impl&lt;T, Request&gt; Freeze for <a class=\"struct\" href=\"tower/buffer/struct.Buffer.html\" title=\"struct tower::buffer::Buffer\">Buffer</a>&lt;T, Request&gt;","synthetic":true,"types":["tower::buffer::service::Buffer"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/discover/struct.ServiceList.html\" title=\"struct tower::discover::ServiceList\">ServiceList</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::discover::list::ServiceList"]},{"text":"impl&lt;K, V&gt; Freeze for <a class=\"enum\" href=\"tower/discover/enum.Change.html\" title=\"enum tower::discover::Change\">Change</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::discover::Change"]},{"text":"impl&lt;P, S, Request&gt; Freeze for <a class=\"struct\" href=\"tower/filter/future/struct.AsyncResponseFuture.html\" title=\"struct tower::filter::future::AsyncResponseFuture\">AsyncResponseFuture</a>&lt;P, S, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"tower/filter/trait.AsyncPredicate.html\" title=\"trait tower::filter::AsyncPredicate\">AsyncPredicate</a>&lt;Request&gt;&gt;::<a class=\"associatedtype\" href=\"tower/filter/trait.AsyncPredicate.html#associatedtype.Future\" title=\"type tower::filter::AsyncPredicate::Future\">Future</a>: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;&lt;P as <a class=\"trait\" href=\"tower/filter/trait.AsyncPredicate.html\" title=\"trait tower::filter::AsyncPredicate\">AsyncPredicate</a>&lt;Request&gt;&gt;::<a class=\"associatedtype\" href=\"tower/filter/trait.AsyncPredicate.html#associatedtype.Request\" title=\"type tower::filter::AsyncPredicate::Request\">Request</a>&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Future\" title=\"type tower::Service::Future\">Future</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::filter::future::AsyncResponseFuture"]},{"text":"impl&lt;R, F&gt; Freeze for <a class=\"struct\" href=\"tower/filter/future/struct.ResponseFuture.html\" title=\"struct tower::filter::future::ResponseFuture\">ResponseFuture</a>&lt;R, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::filter::future::ResponseFuture"]},{"text":"impl&lt;U&gt; Freeze for <a class=\"struct\" href=\"tower/filter/struct.FilterLayer.html\" title=\"struct tower::filter::FilterLayer\">FilterLayer</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::filter::layer::FilterLayer"]},{"text":"impl&lt;U&gt; Freeze for <a class=\"struct\" href=\"tower/filter/struct.AsyncFilterLayer.html\" title=\"struct tower::filter::AsyncFilterLayer\">AsyncFilterLayer</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::filter::layer::AsyncFilterLayer"]},{"text":"impl&lt;T, U&gt; Freeze for <a class=\"struct\" href=\"tower/filter/struct.Filter.html\" title=\"struct tower::filter::Filter\">Filter</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::filter::Filter"]},{"text":"impl&lt;T, U&gt; Freeze for <a class=\"struct\" href=\"tower/filter/struct.AsyncFilter.html\" title=\"struct tower::filter::AsyncFilter\">AsyncFilter</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::filter::AsyncFilter"]},{"text":"impl&lt;S, P&gt; Freeze for <a class=\"struct\" href=\"tower/hedge/struct.Hedge.html\" title=\"struct tower::hedge::Hedge\">Hedge</a>&lt;S, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::hedge::Hedge"]},{"text":"impl&lt;S, Request&gt; Freeze for <a class=\"struct\" href=\"tower/hedge/struct.Future.html\" title=\"struct tower::hedge::Future\">Future</a>&lt;S, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;Request&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Future\" title=\"type tower::Service::Future\">Future</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::hedge::Future"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/limit/concurrency/future/struct.ResponseFuture.html\" title=\"struct tower::limit::concurrency::future::ResponseFuture\">ResponseFuture</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::limit::concurrency::future::ResponseFuture"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/limit/concurrency/struct.ConcurrencyLimitLayer.html\" title=\"struct tower::limit::concurrency::ConcurrencyLimitLayer\">ConcurrencyLimitLayer</a>","synthetic":true,"types":["tower::limit::concurrency::layer::ConcurrencyLimitLayer"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/limit/concurrency/struct.GlobalConcurrencyLimitLayer.html\" title=\"struct tower::limit::concurrency::GlobalConcurrencyLimitLayer\">GlobalConcurrencyLimitLayer</a>","synthetic":true,"types":["tower::limit::concurrency::layer::GlobalConcurrencyLimitLayer"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/limit/concurrency/struct.ConcurrencyLimit.html\" title=\"struct tower::limit::concurrency::ConcurrencyLimit\">ConcurrencyLimit</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::limit::concurrency::service::ConcurrencyLimit"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/limit/rate/struct.RateLimitLayer.html\" title=\"struct tower::limit::rate::RateLimitLayer\">RateLimitLayer</a>","synthetic":true,"types":["tower::limit::rate::layer::RateLimitLayer"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/limit/rate/struct.Rate.html\" title=\"struct tower::limit::rate::Rate\">Rate</a>","synthetic":true,"types":["tower::limit::rate::rate::Rate"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/limit/rate/struct.RateLimit.html\" title=\"struct tower::limit::rate::RateLimit\">RateLimit</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::limit::rate::service::RateLimit"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/load/completion/struct.CompleteOnResponse.html\" title=\"struct tower::load::completion::CompleteOnResponse\">CompleteOnResponse</a>","synthetic":true,"types":["tower::load::completion::CompleteOnResponse"]},{"text":"impl&lt;F, C, H&gt; Freeze for <a class=\"struct\" href=\"tower/load/completion/struct.TrackCompletionFuture.html\" title=\"struct tower::load::completion::TrackCompletionFuture\">TrackCompletionFuture</a>&lt;F, C, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::load::completion::TrackCompletionFuture"]},{"text":"impl&lt;T, M&gt; Freeze for <a class=\"struct\" href=\"tower/load/struct.Constant.html\" title=\"struct tower::load::Constant\">Constant</a>&lt;T, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::load::constant::Constant"]},{"text":"impl&lt;S, C&gt; Freeze for <a class=\"struct\" href=\"tower/load/peak_ewma/struct.PeakEwma.html\" title=\"struct tower::load::peak_ewma::PeakEwma\">PeakEwma</a>&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::load::peak_ewma::PeakEwma"]},{"text":"impl&lt;D, C&gt; Freeze for <a class=\"struct\" href=\"tower/load/peak_ewma/struct.PeakEwmaDiscover.html\" title=\"struct tower::load::peak_ewma::PeakEwmaDiscover\">PeakEwmaDiscover</a>&lt;D, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::load::peak_ewma::PeakEwmaDiscover"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/load/peak_ewma/struct.Cost.html\" title=\"struct tower::load::peak_ewma::Cost\">Cost</a>","synthetic":true,"types":["tower::load::peak_ewma::Cost"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/load/peak_ewma/struct.Handle.html\" title=\"struct tower::load::peak_ewma::Handle\">Handle</a>","synthetic":true,"types":["tower::load::peak_ewma::Handle"]},{"text":"impl&lt;S, C&gt; Freeze for <a class=\"struct\" href=\"tower/load/pending_requests/struct.PendingRequests.html\" title=\"struct tower::load::pending_requests::PendingRequests\">PendingRequests</a>&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::load::pending_requests::PendingRequests"]},{"text":"impl&lt;D, C&gt; Freeze for <a class=\"struct\" href=\"tower/load/pending_requests/struct.PendingRequestsDiscover.html\" title=\"struct tower::load::pending_requests::PendingRequestsDiscover\">PendingRequestsDiscover</a>&lt;D, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::load::pending_requests::PendingRequestsDiscover"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/load/pending_requests/struct.Count.html\" title=\"struct tower::load::pending_requests::Count\">Count</a>","synthetic":true,"types":["tower::load::pending_requests::Count"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/load/pending_requests/struct.Handle.html\" title=\"struct tower::load::pending_requests::Handle\">Handle</a>","synthetic":true,"types":["tower::load::pending_requests::Handle"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/load_shed/error/struct.Overloaded.html\" title=\"struct tower::load_shed::error::Overloaded\">Overloaded</a>","synthetic":true,"types":["tower::load_shed::error::Overloaded"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/load_shed/future/struct.ResponseFuture.html\" title=\"struct tower::load_shed::future::ResponseFuture\">ResponseFuture</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::load_shed::future::ResponseFuture"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/load_shed/struct.LoadShedLayer.html\" title=\"struct tower::load_shed::LoadShedLayer\">LoadShedLayer</a>","synthetic":true,"types":["tower::load_shed::layer::LoadShedLayer"]},{"text":"impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"tower/load_shed/struct.LoadShed.html\" title=\"struct tower::load_shed::LoadShed\">LoadShed</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::load_shed::LoadShed"]},{"text":"impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"tower/make/struct.Shared.html\" title=\"struct tower::make::Shared\">Shared</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::make::make_service::shared::Shared"]},{"text":"impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"tower/make/future/struct.SharedFuture.html\" title=\"struct tower::make::future::SharedFuture\">SharedFuture</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::make::make_service::shared::SharedFuture"]},{"text":"impl&lt;M, Request&gt; Freeze for <a class=\"struct\" href=\"tower/make/struct.IntoService.html\" title=\"struct tower::make::IntoService\">IntoService</a>&lt;M, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::make::make_service::IntoService"]},{"text":"impl&lt;'a, M, Request&gt; Freeze for <a class=\"struct\" href=\"tower/make/struct.AsService.html\" title=\"struct tower::make::AsService\">AsService</a>&lt;'a, M, Request&gt;","synthetic":true,"types":["tower::make::make_service::AsService"]},{"text":"impl&lt;K, S, Req&gt; !Freeze for <a class=\"struct\" href=\"tower/ready_cache/cache/struct.ReadyCache.html\" title=\"struct tower::ready_cache::cache::ReadyCache\">ReadyCache</a>&lt;K, S, Req&gt;","synthetic":true,"types":["tower::ready_cache::cache::ReadyCache"]},{"text":"impl&lt;K&gt; Freeze for <a class=\"struct\" href=\"tower/ready_cache/error/struct.Failed.html\" title=\"struct tower::ready_cache::error::Failed\">Failed</a>&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::ready_cache::error::Failed"]},{"text":"impl&lt;F, E&gt; Freeze for <a class=\"struct\" href=\"tower/reconnect/struct.ResponseFuture.html\" title=\"struct tower::reconnect::ResponseFuture\">ResponseFuture</a>&lt;F, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::reconnect::future::ResponseFuture"]},{"text":"impl&lt;M, Target&gt; Freeze for <a class=\"struct\" href=\"tower/reconnect/struct.Reconnect.html\" title=\"struct tower::reconnect::Reconnect\">Reconnect</a>&lt;M, Target&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Target: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;Target&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Error\" title=\"type tower::Service::Error\">Error</a>: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;Target&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Future\" title=\"type tower::Service::Future\">Future</a>: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;Target&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Response\" title=\"type tower::Service::Response\">Response</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::reconnect::Reconnect"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"tower/retry/budget/struct.Budget.html\" title=\"struct tower::retry::budget::Budget\">Budget</a>","synthetic":true,"types":["tower::retry::budget::Budget"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/retry/budget/struct.Overdrawn.html\" title=\"struct tower::retry::budget::Overdrawn\">Overdrawn</a>","synthetic":true,"types":["tower::retry::budget::Overdrawn"]},{"text":"impl&lt;P, S, Request&gt; Freeze for <a class=\"struct\" href=\"tower/retry/future/struct.ResponseFuture.html\" title=\"struct tower::retry::future::ResponseFuture\">ResponseFuture</a>&lt;P, S, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Request: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"tower/retry/trait.Policy.html\" title=\"trait tower::retry::Policy\">Policy</a>&lt;Request, &lt;S as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;Request&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Response\" title=\"type tower::Service::Response\">Response</a>, &lt;S as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;Request&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Error\" title=\"type tower::Service::Error\">Error</a>&gt;&gt;::<a class=\"associatedtype\" href=\"tower/retry/trait.Policy.html#associatedtype.Future\" title=\"type tower::retry::Policy::Future\">Future</a>: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;Request&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Future\" title=\"type tower::Service::Future\">Future</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::retry::future::ResponseFuture"]},{"text":"impl&lt;P&gt; Freeze for <a class=\"struct\" href=\"tower/retry/struct.RetryLayer.html\" title=\"struct tower::retry::RetryLayer\">RetryLayer</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::retry::layer::RetryLayer"]},{"text":"impl&lt;P, S&gt; Freeze for <a class=\"struct\" href=\"tower/retry/struct.Retry.html\" title=\"struct tower::retry::Retry\">Retry</a>&lt;P, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::retry::Retry"]},{"text":"impl&lt;F, E&gt; Freeze for <a class=\"struct\" href=\"tower/spawn_ready/future/struct.ResponseFuture.html\" title=\"struct tower::spawn_ready::future::ResponseFuture\">ResponseFuture</a>&lt;F, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::spawn_ready::future::ResponseFuture"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/spawn_ready/struct.SpawnReadyLayer.html\" title=\"struct tower::spawn_ready::SpawnReadyLayer\">SpawnReadyLayer</a>","synthetic":true,"types":["tower::spawn_ready::layer::SpawnReadyLayer"]},{"text":"impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"tower/spawn_ready/struct.MakeSpawnReady.html\" title=\"struct tower::spawn_ready::MakeSpawnReady\">MakeSpawnReady</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::spawn_ready::make::MakeSpawnReady"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/spawn_ready/struct.MakeFuture.html\" title=\"struct tower::spawn_ready::MakeFuture\">MakeFuture</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::spawn_ready::make::MakeFuture"]},{"text":"impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"tower/spawn_ready/struct.SpawnReady.html\" title=\"struct tower::spawn_ready::SpawnReady\">SpawnReady</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::spawn_ready::service::SpawnReady"]},{"text":"impl&lt;S, F, Req&gt; Freeze for <a class=\"struct\" href=\"tower/steer/struct.Steer.html\" title=\"struct tower::steer::Steer\">Steer</a>&lt;S, F, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::steer::Steer"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/timeout/error/struct.Elapsed.html\" title=\"struct tower::timeout::error::Elapsed\">Elapsed</a>","synthetic":true,"types":["tower::timeout::error::Elapsed"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"tower/timeout/future/struct.ResponseFuture.html\" title=\"struct tower::timeout::future::ResponseFuture\">ResponseFuture</a>&lt;T&gt;","synthetic":true,"types":["tower::timeout::future::ResponseFuture"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/timeout/struct.TimeoutLayer.html\" title=\"struct tower::timeout::TimeoutLayer\">TimeoutLayer</a>","synthetic":true,"types":["tower::timeout::layer::TimeoutLayer"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/timeout/struct.Timeout.html\" title=\"struct tower::timeout::Timeout\">Timeout</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::timeout::Timeout"]},{"text":"impl&lt;S, F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.AndThen.html\" title=\"struct tower::util::AndThen\">AndThen</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::and_then::AndThen"]},{"text":"impl&lt;F1, F2, N&gt; Freeze for <a class=\"struct\" href=\"tower/util/future/struct.AndThenFuture.html\" title=\"struct tower::util::future::AndThenFuture\">AndThenFuture</a>&lt;F1, F2, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F1: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;F2: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::and_then::AndThenFuture"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.AndThenLayer.html\" title=\"struct tower::util::AndThenLayer\">AndThenLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::and_then::AndThenLayer"]},{"text":"impl&lt;In, T, U, E&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.BoxLayer.html\" title=\"struct tower::util::BoxLayer\">BoxLayer</a>&lt;In, T, U, E&gt;","synthetic":true,"types":["tower::util::boxed::layer::BoxLayer"]},{"text":"impl&lt;T, U, E&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.BoxService.html\" title=\"struct tower::util::BoxService\">BoxService</a>&lt;T, U, E&gt;","synthetic":true,"types":["tower::util::boxed::sync::BoxService"]},{"text":"impl&lt;T, U, E&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.UnsyncBoxService.html\" title=\"struct tower::util::UnsyncBoxService\">UnsyncBoxService</a>&lt;T, U, E&gt;","synthetic":true,"types":["tower::util::boxed::unsync::UnsyncBoxService"]},{"text":"impl&lt;T, U, E&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.BoxCloneService.html\" title=\"struct tower::util::BoxCloneService\">BoxCloneService</a>&lt;T, U, E&gt;","synthetic":true,"types":["tower::util::boxed_clone::BoxCloneService"]},{"text":"impl&lt;Svc, S&gt; !Freeze for <a class=\"struct\" href=\"tower/util/struct.CallAll.html\" title=\"struct tower::util::CallAll\">CallAll</a>&lt;Svc, S&gt;","synthetic":true,"types":["tower::util::call_all::ordered::CallAll"]},{"text":"impl&lt;Svc, S&gt; !Freeze for <a class=\"struct\" href=\"tower/util/struct.CallAllUnordered.html\" title=\"struct tower::util::CallAllUnordered\">CallAllUnordered</a>&lt;Svc, S&gt;","synthetic":true,"types":["tower::util::call_all::unordered::CallAllUnordered"]},{"text":"impl&lt;A, B&gt; Freeze for <a class=\"enum\" href=\"tower/util/enum.Either.html\" title=\"enum tower::util::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::either::Either"]},{"text":"impl&lt;F, S&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.FutureService.html\" title=\"struct tower::util::FutureService\">FutureService</a>&lt;F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::future_service::FutureService"]},{"text":"impl&lt;S, F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapErr.html\" title=\"struct tower::util::MapErr\">MapErr</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_err::MapErr"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapErrLayer.html\" title=\"struct tower::util::MapErrLayer\">MapErrLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_err::MapErrLayer"]},{"text":"impl&lt;F, N&gt; Freeze for <a class=\"struct\" href=\"tower/util/future/struct.MapErrFuture.html\" title=\"struct tower::util::future::MapErrFuture\">MapErrFuture</a>&lt;F, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_err::MapErrFuture"]},{"text":"impl&lt;S, F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapRequest.html\" title=\"struct tower::util::MapRequest\">MapRequest</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_request::MapRequest"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapRequestLayer.html\" title=\"struct tower::util::MapRequestLayer\">MapRequestLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_request::MapRequestLayer"]},{"text":"impl&lt;S, F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapResponse.html\" title=\"struct tower::util::MapResponse\">MapResponse</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_response::MapResponse"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapResponseLayer.html\" title=\"struct tower::util::MapResponseLayer\">MapResponseLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_response::MapResponseLayer"]},{"text":"impl&lt;F, N&gt; Freeze for <a class=\"struct\" href=\"tower/util/future/struct.MapResponseFuture.html\" title=\"struct tower::util::future::MapResponseFuture\">MapResponseFuture</a>&lt;F, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_response::MapResponseFuture"]},{"text":"impl&lt;S, F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapResult.html\" title=\"struct tower::util::MapResult\">MapResult</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_result::MapResult"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapResultLayer.html\" title=\"struct tower::util::MapResultLayer\">MapResultLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_result::MapResultLayer"]},{"text":"impl&lt;F, N&gt; Freeze for <a class=\"struct\" href=\"tower/util/future/struct.MapResultFuture.html\" title=\"struct tower::util::future::MapResultFuture\">MapResultFuture</a>&lt;F, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_result::MapResultFuture"]},{"text":"impl&lt;S, F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapFuture.html\" title=\"struct tower::util::MapFuture\">MapFuture</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_future::MapFuture"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.MapFutureLayer.html\" title=\"struct tower::util::MapFutureLayer\">MapFutureLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::map_future::MapFutureLayer"]},{"text":"impl&lt;S, Req&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.Oneshot.html\" title=\"struct tower::util::Oneshot\">Oneshot</a>&lt;S, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"tower/trait.Service.html\" title=\"trait tower::Service\">Service</a>&lt;Req&gt;&gt;::<a class=\"associatedtype\" href=\"tower/trait.Service.html#associatedtype.Future\" title=\"type tower::Service::Future\">Future</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::oneshot::Oneshot"]},{"text":"impl Freeze for <a class=\"struct\" href=\"tower/util/error/optional/struct.None.html\" title=\"struct tower::util::error::optional::None\">None</a>","synthetic":true,"types":["tower::util::optional::error::None"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/util/future/optional/struct.ResponseFuture.html\" title=\"struct tower::util::future::optional::ResponseFuture\">ResponseFuture</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::optional::future::ResponseFuture"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.Optional.html\" title=\"struct tower::util::Optional\">Optional</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::optional::Optional"]},{"text":"impl&lt;T, Request&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.ReadyOneshot.html\" title=\"struct tower::util::ReadyOneshot\">ReadyOneshot</a>&lt;T, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::ready::ReadyOneshot"]},{"text":"impl&lt;'a, T, Request&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.Ready.html\" title=\"struct tower::util::Ready\">Ready</a>&lt;'a, T, Request&gt;","synthetic":true,"types":["tower::util::ready::Ready"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.ServiceFn.html\" title=\"struct tower::util::ServiceFn\">ServiceFn</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::service_fn::ServiceFn"]},{"text":"impl&lt;S, F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.Then.html\" title=\"struct tower::util::Then\">Then</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::then::Then"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower/util/struct.ThenLayer.html\" title=\"struct tower::util::ThenLayer\">ThenLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::then::ThenLayer"]},{"text":"impl&lt;F1, F2, N&gt; Freeze for <a class=\"struct\" href=\"tower/util/future/struct.ThenFuture.html\" title=\"struct tower::util::future::ThenFuture\">ThenFuture</a>&lt;F1, F2, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F1: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;F2: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::util::then::ThenFuture"]},{"text":"impl&lt;L&gt; Freeze for <a class=\"struct\" href=\"tower/struct.ServiceBuilder.html\" title=\"struct tower::ServiceBuilder\">ServiceBuilder</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Freeze,&nbsp;</span>","synthetic":true,"types":["tower::builder::ServiceBuilder"]}];
implementors["tower_layer"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"tower_layer/struct.Identity.html\" title=\"struct tower_layer::Identity\">Identity</a>","synthetic":true,"types":["tower_layer::identity::Identity"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"tower_layer/struct.LayerFn.html\" title=\"struct tower_layer::LayerFn\">LayerFn</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["tower_layer::layer_fn::LayerFn"]},{"text":"impl&lt;Inner, Outer&gt; Freeze for <a class=\"struct\" href=\"tower_layer/struct.Stack.html\" title=\"struct tower_layer::Stack\">Stack</a>&lt;Inner, Outer&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Outer: Freeze,&nbsp;</span>","synthetic":true,"types":["tower_layer::stack::Stack"]}];
implementors["tower_test"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"tower_test/mock/error/struct.Closed.html\" title=\"struct tower_test::mock::error::Closed\">Closed</a>","synthetic":true,"types":["tower_test::mock::error::Closed"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower_test/mock/future/struct.ResponseFuture.html\" title=\"struct tower_test::mock::future::ResponseFuture\">ResponseFuture</a>&lt;T&gt;","synthetic":true,"types":["tower_test::mock::future::ResponseFuture"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower_test/mock/spawn/struct.Spawn.html\" title=\"struct tower_test::mock::spawn::Spawn\">Spawn</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["tower_test::mock::spawn::Spawn"]},{"text":"impl&lt;T, U&gt; !Freeze for <a class=\"struct\" href=\"tower_test/mock/struct.Mock.html\" title=\"struct tower_test::mock::Mock\">Mock</a>&lt;T, U&gt;","synthetic":true,"types":["tower_test::mock::Mock"]},{"text":"impl&lt;T, U&gt; Freeze for <a class=\"struct\" href=\"tower_test/mock/struct.Handle.html\" title=\"struct tower_test::mock::Handle\">Handle</a>&lt;T, U&gt;","synthetic":true,"types":["tower_test::mock::Handle"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"tower_test/mock/struct.SendResponse.html\" title=\"struct tower_test::mock::SendResponse\">SendResponse</a>&lt;T&gt;","synthetic":true,"types":["tower_test::mock::SendResponse"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()