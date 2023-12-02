import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useFooterDataStore = defineStore('footerMetadata', () => {
    const metadata = ref({
        title: "Our Sponsors",
        sponsors: [
            "./logos/logoipsum-261.svg",
            "./logos/logoipsum-259.svg",
            "./logos/logoipsum-265.svg",
            "./logos/logoipsum-332.svg"
        ]
    })
    return {metadata}
})