import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { VerticalNavigationLink } from '#ui/types'
  
export default function(array:Promise<ParsedContent[]>) {
    const newArray:VerticalNavigationLink[] = [];

    array.then(onfulfilled => {
        onfulfilled.forEach(item => {
            newArray.push({
                label: item.title || "Naslov",
                to: item._path
            })
        });
    }) 
       return newArray
}