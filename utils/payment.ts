declare global {
  interface Window {
    Razorpay: any;
  }
}

export const razorPayment = async (data: any) => {
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/payments/razorpay`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ plan: data + 1 }),
  })
    .then((res) => res.json())
    .then((d) => {
      new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        order_id: d.data.id,
        currency: d.data.currency,
        amount: d.data.amount,
        description: 'Thanks for your purchase',
        handler: function (response: any) {
          console.log(response);
        },
      }).open(d);
    });
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/payments/ping`, {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((d) => console.log(d));
};
