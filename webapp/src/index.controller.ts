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
    }

    /**
     * @method reacts to a click
     * @author lf9-Team
     * @date 17.06.2024
     */
    function accordion () {
        const accordionContainers = document.getElementsByClassName('container');

        Array.from(accordionContainers).forEach(container => {
            container.addEventListener('click', (evt) => {
                const element = evt.currentTarget;
                if(element instanceof HTMLDivElement){
                    element.classList.toggle('active');
            
                    const content = element.getElementsByClassName('content'),
                            contentArray = Array.from(content),
                            box = contentArray[0];
                            
                    if (box instanceof HTMLDivElement) {
                        if (box.style.display === "block") {
                            box.style.display = "none";
                        } else {
                            box.style.display = "block";
                        }
                    }
                }
            });
        });
    }
}