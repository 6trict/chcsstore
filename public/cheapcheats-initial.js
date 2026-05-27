(function () {
  var logoUrl = 'https://imagedelivery.net/VU2Gexkve1SGQTbghAvrTg/368d36a0-de92-4f8b-fdb3-37c99b993200/public';
  var previous = window.__SHOPPEX_INITIAL__ || {};
  var previousStore = previous.store || {};
  var previousName = typeof previousStore.name === 'string' ? previousStore.name.trim() : '';
  var previousTitle = typeof previousStore.title === 'string' ? previousStore.title.trim() : '';
  var legacyName = 'flood' + 'line';

  window.__SHOPPEX_INITIAL__ = {
    ...previous,
    store: {
      ...previousStore,
      id: previousStore.id || '019de93e-f681-7c53-9efd-781312bc5619',
      name: previousName && previousName.toLowerCase() !== legacyName ? previousName : 'cheapcheats',
      title: previousTitle && previousTitle.toLowerCase() !== legacyName ? previousTitle : 'cheapcheats',
      slug: previousStore.slug || 'cheapcheats',
      logo: previousStore.logo || logoUrl,
      avatar: previousStore.avatar || logoUrl,
      currency: previousStore.currency || 'USD',
      default_currency: previousStore.default_currency || 'USD'
    },
    products: previous.products || [],
    groups: previous.groups || [],
    items: previous.items || [],
    categories: previous.categories || [],
    addons: previous.addons || { items: [] }
  };
})();
