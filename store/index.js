import items from '~/static/all';

export const actions = {
  nuxtServerInit(vuexContext,context){

    return new Promise((reso) => {
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
      reso();
    })
    // return context.app.$axios
    //   .$get("/api/data/all.json")
    //   .then(items => {
    //     const pickupItems = items.filter(item => {
    //       return item.pickup;
    //     });
    //     vuexContext.dispatch("items/setItems",{
    //       key: 'all',
    //       list: items
    //     });
    //     vuexContext.dispatch("items/setItems",{
    //       key: 'pickup',
    //       list: pickupItems
    //     });
        
    //     // vuexContext.commit()

    //   })
    //   .catch(e => {
    //     context.error(e)
    //   })

  }, // nuxtServerInit
}