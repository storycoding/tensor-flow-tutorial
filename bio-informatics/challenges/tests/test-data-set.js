const testDataSet =  (functionName) => {
    const dataSet = require(`./test-data/${functionName}.json`);
    const callback = require(`../${functionName}.js`);

    dataSet.forEach( data => {
        const { args, expected } = data;
        test(`args: ${JSON.stringify(args, null, 2)}`, () => {
            expect(
                JSON.stringify(
                    callback(...args)
                )
            ).toEqual(
                JSON.stringify(expected));
        });
    });
}

module.exports = testDataSet;