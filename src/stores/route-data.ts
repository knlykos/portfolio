import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useRouteDataStore = defineStore('routeData', () => {
    const routeData = ref({
        title: "Bayshore Bikeway",
        mapMetadata: [],
        characteristicTable: [
            {
                "Feature": "Total Distance",
                "Details": "24 miles (38.6 km)"
            },
            {
                "Feature": "Elevation Changes",
                "Details": "Minimum: 10 feet (3 meters), Maximum: 50 feet (15.2 meters)"
            },
            {
                "Feature": "Average Ride Time",
                "Details": "2 hours 30 minutes"
            },
            {
                "Feature": "Cyclist Traffic",
                "Details": "Weekday Average: 150 cyclists, Weekend Average: 400 cyclists"
            },
            {
                "Feature": "Average Speed",
                "Details": "0 to 8 miles: 13 mph (20.9 km/h), 8 to 16 miles: 11 mph (17.7 km/h), 16 to 24 miles: 14 mph (22.5 km/h)"
            },
            {
                "Feature": "Trail Condition Updates",
                "Details": "Overall: Excellent, Minor repairs near mile 15, completion by August 10th"
            },
            {
                "Feature": "Points of Interest",
                "Details": "\"The Wheel Hub\" Cafe: 6 miles from start, \"Pedal Power\" Bike Repair: 12 miles from start, Scenic Overlook: 18 miles from start"
            },
            {
                "Feature": "Safety Index",
                "Details": "97% safe with minimal incidents"
            },
            {
                "Feature": "Additional Content",
                "Details": "Interactive Maps, Safety Tips, Community Feedback, Weather Alerts, Route Alternatives, Events Calendar, Challenges, Discussion Forum"
            }
        ],
        articles: [
            {
                title: "Pedaling Through History: The Evolution of Cycling Culture in San Diego",
                description: "Explore the history and growth of cycling in San Diego, tracing its roots from a recreational pastime to its current status as a popular mode of transportation and leisure activity."
            },
            {
                title: "San Diego's Cycling Revolution: How the City Became a Biking Haven",
                description: "Explore the history and growth of cycling in San Diego, tracing its roots from a recreational pastime to its current status as a popular mode of transportation and leisure activity."
            },
            {
                title: "Ride the Wave: The Rise of Urban Cycling in San Diego",
                description: "An in-depth look at how urban cycling has gained popularity in San Diego, focusing on the integration of cycling in daily commuting and the city's efforts to support this trend."
            }
        ],
        article: {
            "title": "Pedaling Through History: The Evolution of Cycling Culture in San Diego",
            "sections": [
                {
                    "sectionTitle": "Introduction",
                    "content": "San Diego, known for its picturesque landscapes and temperate climate, has fostered a vibrant cycling culture that has evolved significantly over the years. From the early days of penny-farthings to the contemporary era of high-tech mountain bikes and bustling cycling communities, the journey of cycling in San Diego mirrors the broader shifts in social attitudes, urban development, and environmental consciousness."
                },
                {
                    "sectionTitle": "The Early Days",
                    "content": "In the late 19th and early 20th centuries, cycling in San Diego was a novel activity, primarily seen as a leisure pursuit for the more affluent members of society. The introduction of bicycles sparked interest among San Diegans who enjoyed leisurely rides along the city’s early roads. However, the lack of dedicated cycling infrastructure and the dominance of automobiles meant that cycling was not yet seen as a practical mode of transportation."
                },
                {
                    "sectionTitle": "Post-War Boom and Decline",
                    "content": "The post-World War II era saw a decline in cycling’s popularity across the United States, and San Diego was no exception. The rapid expansion of suburbs and the increased reliance on automobiles led to a decrease in bicycle usage. Cycling was mainly confined to children and enthusiasts, with little mainstream appeal."
                },
                {
                    "sectionTitle": "The Renaissance of Cycling",
                    "content": "The 1970s and 1980s marked a renaissance in cycling culture in San Diego, mirroring the environmental movement and growing health consciousness across the country. The oil crisis of the 1970s also played a role, as people began to look for more energy-efficient modes of transportation. San Diego responded with the development of bike paths and lanes, making cycling safer and more accessible."
                },
                {
                    "sectionTitle": "Mountain Biking and BMX",
                    "content": "The 1980s and 1990s saw the rise of mountain biking and BMX in San Diego, activities that took advantage of the region’s diverse terrain. The mountainous areas and scenic landscapes around San Diego provided the perfect backdrop for these adventurous forms of cycling. This period also saw the emergence of local cycling clubs and advocacy groups, working to improve cycling infrastructure and promote the sport.",
                    "image": "./article-image.png"
                },
                {
                    "sectionTitle": "The 21st Century – A Cycling Hub",
                    "content": "Today, San Diego is renowned as a cycling hub, with extensive bike lanes, dedicated cycling paths, and a community that embraces cycling in various forms. The city hosts numerous cycling events, from casual group rides to competitive races. Cycling is now recognized not just as a sport or leisure activity, but as a sustainable mode of transportation and a key part of urban planning."
                },
                {
                    "sectionTitle": "The Future of Cycling in San Diego",
                    "content": "Looking forward, San Diego continues to invest in cycling infrastructure, with plans to expand bike lanes and improve safety measures. There’s a growing emphasis on integrating cycling into the broader public transportation system. Additionally, the rise of e-bikes is making cycling more accessible to a broader range of people, further embedding cycling into the fabric of San Diego’s daily life."
                },
                {
                    "sectionTitle": "Conclusion",
                    "content": "The evolution of cycling culture in San Diego reflects a journey from a niche hobby to a mainstream lifestyle choice. It’s a testament to the city’s adaptability, forward-thinking urban planning, and commitment to sustainable living. As San Diego continues to evolve, cycling will undoubtedly play a pivotal role in shaping its future."
                }
            ]
        }
    })
    return {routeData}
})

