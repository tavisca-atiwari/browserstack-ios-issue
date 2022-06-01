describe('Verify API call failing on IOS devices', function () {

    it('verify Post request is successful on IOS and Android ', function () {

        const url = 'https://reqres.in/api/users';
        const data = {
            name: "paul rudd",
            movies: ["I Love You Man", "Role Models"]
        };
        const requestHeaders = {};
        requestHeaders['content-type'] = "application/json";
        requestHeaders['accept-encoding'] = "gzip, deflate";
        requestHeaders['accept-language'] = "en-US,en;q=0.8";

        const responseJsonData = browser.call(async () => {
            return await PostReq(url, requestHeaders, data);
        });
        const response = JSON.stringify(responseJsonData);
        console.log("Response Json Data is ->", response);
        browser.pause(5000);
        expect(response).toContain("movies");
        expect(response).toContain("Role Models");
    });

    it('verify Get request is successful on IOS and Android ', function () {

        const url = 'https://reqres.in/api/users/2';

        const requestHeaders = {};
        requestHeaders['content-type'] = "application/json";
        requestHeaders['accept-encoding'] = "gzip, deflate";
        requestHeaders['accept-language'] = "en-US,en;q=0.8";

        const responseJsonData = browser.call(async () => {
            return await GetReq(url, requestHeaders);
        });
        const response = JSON.stringify(responseJsonData);
        console.log("Response Json Data is ->", response);
        browser.pause(5000);
        expect(response).toContain("email");
    });

});

async function PostReq(url: string, headers?: any, requestBody?: any) {
    browser.setTimeout({ script: 60000 });
    return await browser.executeAsync(function (url, headers, requestBody, done) {
        // browser context - you can not access client or console
        setTimeout(() => {
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestBody)
            }).then((response) => {
                if (response.ok && response.status == 204) {
                    done();
                } else if (response.ok) {
                    done(response.json());
                }
                throw response;
            }).catch((error) => {
                if (error instanceof Error) {
                    done({ error });
                }
                done(error.json().then((responseJson: { msg: any; }) => {
                    done({
                        error: new Error(
                            `HTTP ${error.status} ${error.statusText}: ${responseJson.msg}`
                        )
                    });
                }));
            });
        }, 5000);
    }, url, headers, requestBody);
}

async function GetReq(url: string, headers?: any) {
    browser.setTimeout({
        implicit: 5000,
        pageLoad: 1000,
        script: 9000
    });

    return await browser.executeAsync(function (url, headers, done) {
        // browser context - you can not access client or console
        setTimeout(() => {
            fetch(url, {
                method: 'Get',
                headers: headers
            }).then((response) => {
                if (response.ok && response.status == 204) {
                    done();
                } else if (response.ok) {
                    done(response.json());
                }
                throw response;
            }).catch((error) => {
                if (error instanceof Error) {
                    done({ error });
                }
                done(error.json().then((responseJson: { msg: any; }) => {
                    done({
                        error: new Error(
                            `HTTP ${error.status} ${error.statusText}: ${responseJson.msg}`
                        )
                    });
                }));
            });
        }, 500);
    }, url, headers);
}
