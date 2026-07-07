export default {
  name: 'PricingSection',
  emits: ['buy'],
  setup(_, { emit }) {
    const plans = [
      { key: 'basic', popular: false, featureKeys: [0,1,2,3].map(i => `pricing.basic.features[${i}]`) },
      { key: 'mid', popular: true, featureKeys: [0,1,2,3,4].map(i => `pricing.mid.features[${i}]`) },
      { key: 'platinum', popular: false, featureKeys: [0,1,2,3,4].map(i => `pricing.platinum.features[${i}]`) }
    ]
    function onBuyNow(planKey) { emit('buy', planKey) }
    return { plans, onBuyNow }
  }
}
