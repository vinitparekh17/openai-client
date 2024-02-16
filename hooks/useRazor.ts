export const useRazor = (): { status: Promise<boolean> } => {
  if (document.getElementById('razorpay-script')) {
    return { status: Promise.resolve(true) };
  } else {
    return {
      status: new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          reject();
        };
        script.id = 'razorpay-script';
        document.body.appendChild(script);
      }),
    };
  }
};
