namespace Index {
    _onInit();
    
    /**
     * @private
     * @method inits the page
     * @author DerEineFlow
     * @memberof AW_Crew
     * @date 05.12.2023
     */
    function _onInit () {
        // AW.Base.loading(false);
        accordion();
        addCopyCodeEventListener();
    }

    /**
     * @method inits the copy code events for the code blocks
     * @author Flowtastisch
     * @date 17.06.2024
     */
    function addCopyCodeEventListener () {
        const codeBoxes = document.getElementsByClassName("code-block") as HTMLCollectionOf<HTMLDivElement>;
        
        if (codeBoxes) {
            // -> code boxes found

            Array.from(codeBoxes).forEach(box => {

                const btns = box.getElementsByTagName("button") as HTMLCollectionOf<HTMLButtonElement>;

                if (btns) {
                    // -> copy buttons founded
                    Array.from(btns).forEach((btn) => {

                        btn.addEventListener("click", (evt) => {
                            onCopyCode(evt);
                        });

                    });
                }

            });

        }
    }

    /**
     * @event onclick
     * @method handels the code block copy btn click event 
     * @param {MouseEvent} evt the mouse btn clicked event
     * @author Flowtastisch
     * @date 17.06.2024
     */
    function onCopyCode (evt: MouseEvent) {
        const   clickedBtn  = evt.currentTarget as HTMLButtonElement | undefined,
                parentBox   = clickedBtn?.parentElement,
                codeBoxArr  = parentBox?.getElementsByTagName("pre") as HTMLCollectionOf<HTMLPreElement>;

        if (codeBoxArr) {
            // -> Code Box Array exists

            Array.from(codeBoxArr).forEach(e => {

                const codeContent = e.innerHTML;

                navigator.clipboard.writeText(codeContent);

            });

        }
    }
      
    /**
     * @method reacts to a click
     * @author lf9-Team
     * @date 17.06.2024
     */
    function accordion () {
        const accordionContainers = document.getElementsByClassName('container');
    
        if (accordionContainers) {
            // -> founded

            Array.from(accordionContainers).forEach(container => {
                const accordionHeading = container.getElementsByClassName('label');

                if (accordionHeading) {
                    // -> founded

                    const singleHeading = Array.from(accordionHeading)[0];
                    
                    singleHeading.addEventListener('click', (evt) => {
                        onAccordionHeaderClicked(evt);
                    });
                }
            });
            
        }
    }

    /**
     * @method reacts to a click
     * @author lf9-Team
     * @date 17.06.2024
     */
    function onAccordionHeaderClicked (evt: Event) {
        const element = evt.currentTarget;
                        
        if (element instanceof HTMLDivElement) {

            const parentBox = element.parentElement;

            if (parentBox instanceof HTMLDivElement) {

                parentBox.classList.toggle('accordionbox-active');

            }
            
        }
    }

    /**
     * @public
     * @event onclick
     * @method navigates to the given link
     * @param {string} url the url you want to navigate to
     * @author Flowtastisch
     * @date 19.06.2024
     */
    export function navigateToURL (url: string) {
        if (url && url !== "") {
            // -> URL is given
            window.open(url, "_blank")?.focus();
        }
    }
}