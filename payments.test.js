describe("setup and teardown of payments", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('needs to add a new payment to allPayments on submitPayment', function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual('20');
    });

    it('should not create payment on submitPaymentInfo() with empty input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('needs to create a new payment on createCurPayment()', funtion () {
        let expectedPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should not create a new input on createCurPayment() with empty input', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentFormTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});