
it('should calculate the monthly rate correctly', function () {
  
  const values = {
    amount: 100000,
    years: 20,
    rate: 4.5
  };
expect(calculateMonthlyPayment(values)).toEqual('632.65');
});



it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100037,
    years: 20,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('632.88');
});

it("should handle high interest rates", function() {
  const values = {
    amount: 100000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('8250.00');
});