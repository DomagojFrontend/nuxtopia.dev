import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { VerticalNavigationLink } from '#ui/types'
  
export default function(array:ParsedContent[]) {
    const newArray:VerticalNavigationLink[] = [];

    array.forEach(item => {
            newArray.push({
                label: item.title || "Naslov",
                to: item._path
            })
        });
       return newArray
}