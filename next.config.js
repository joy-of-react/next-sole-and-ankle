module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/shop/bestsellers',
        permanent: false,
      },
    ];
  },
};
