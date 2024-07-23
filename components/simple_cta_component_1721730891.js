/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1721730891", {
    template: `
    <div class="flex">
        <div class="w-64 h-screen bg-black text-white p-4">
            <nav>
                <ul>
                    <li class="mb-2"><a href="#" class="text-white hover:text-purple-300">Home</a></li>
                    <li class="mb-2"><a href="#" class="text-white hover:text-purple-300">About</a></li>
                    <li class="mb-2"><a href="#" class="text-white hover:text-purple-300">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div class="flex-1">
            <nav class="bg-black p-4">
                <div class="max-w-screen-xl mx-auto flex justify-between items-center">
                    <div class="flex space-x-4">
                        <a href="#" class="text-white hover:text-purple-300">Home</a>
                        <a href="#" class="text-white hover:text-purple-300">About</a>
                        <a href="#" class="text-white hover:text-purple-300">Contact</a>
                    </div>
                </div>
            </nav>
            <section id="cta-component" class="bg-white flex-1">
                <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                        <div id="cta-title-container" class="flex">
                            <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-black">Unlock Ethereum's Potential</h2>
                        </div>

                        <div id="cta-subtitle-container" class="flex">
                            <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-600 md:text-lg">Gain Deeper Insights into the Latest Blockchain Data</p>
                        </div>
                        
                        <div id="cta-button-container" class="flex">
                            <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Analyze New Blockchains</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});