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
                    Array.from(btns).forEach(btn => {

                        btn.addEventListener("click", (evt) => {
                            test(evt);
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
    function test (evt: MouseEvent) {
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
}