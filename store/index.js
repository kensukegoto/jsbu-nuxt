export const actions = {
  nuxtServerInit(vuexContext,context){

    return context.app.$axios
      .$get("/api/data/all.json")
      .then(items => {
        console.log('来るの？');
        // const loadedItems = items.map(item => {
        //   const d = new Date(item.pubDate);
        //   const dStr = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
        //   item = {...item,pubDate:dStr};
        //   return item;
        // })
        const pickupItems = items.filter(item => {
          return item.pickup;
        });
        vuexContext.dispatch("items/setItems",{
          key: 'all',
          list: items
        });
        vuexContext.dispatch("items/setItems",{
          key: 'pickup',
          list: pickupItems
        });
        
        // vuexContext.commit()

      })
      .catch(e => {
        context.error(e)
      })

  }, // nuxtServerInit
}