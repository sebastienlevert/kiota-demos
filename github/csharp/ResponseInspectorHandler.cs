// ------------------------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.  See License in the project root for license information.
// ------------------------------------------------------------------------------

using Microsoft.Kiota.Http.HttpClientLibrary.Extensions;

namespace GitHubDemo
{
    /// <summary>
    /// A <see cref="ResponseInspector"/> implementation using standard .NET libraries.
    /// </summary>
    public class ResponseInspectorHandler : DelegatingHandler
    {
        private readonly ResponseInspectorOption _responseInspectorOption;

        /// <summary>
        /// The <see cref="ResponseInspectorOption"/> constructor
        /// </summary>
        /// <param name="responseInspectorOption">The <see cref="ResponseHeadersOption"/> instance to configure the telemetry</param>
        public ResponseInspectorHandler(ResponseInspectorOption? responseInspectorOption = null)
        {
            this._responseInspectorOption = responseInspectorOption ?? new ResponseInspectorOption();
        }

        /// <summary>
        /// Send a HTTP request
        /// </summary>
        /// <param name="request">The HTTP request<see cref="HttpRequestMessage"/>needs to be sent.</param>
        /// <param name="cancellationToken">The <see cref="CancellationToken"/> for the request.</param>
        /// <returns></returns>
        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (request == null)
                throw new ArgumentNullException(nameof(request));

            var response = await base.SendAsync(request, cancellationToken);
            var responseHandlerOption = request.GetRequestOption<ResponseInspectorOption>() ?? _responseInspectorOption;
            responseHandlerOption.ResponseInspectorHandler(response.Headers);

            return response;
        }
    }
}