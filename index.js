/**
 * @param {string | URL} url
 * @param {string[][] | Record<string, string | ReadonlyArray<string>> | Headers} [headers]
 */
export function createJsonRpcClient(url, headers) {
  return () => Promise.reject(new Error('Not implemented'))
}
