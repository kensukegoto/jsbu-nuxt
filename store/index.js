export const actions = {
  nuxtServerInit(vuexContext,context){

    return context.app.$axios
      .$get("/api/data/all.json")
      .then(items => {
        // console.log(items);
        // const loadedItems = items.map(item => {
        //   const d = new Date(item.pubDate);
        //   const dStr = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
        //   item = {...item,pubDate:dStr};
        //   return item;
        // })
        vuexContext.dispatch("items/setItems",items);
        // vuexContext.commit()

      })
      .catch(e => {
        context.error(e)
      })

  }, // nuxtServerInit
}