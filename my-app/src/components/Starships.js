function setStarships() {
        this.setState((state) => {
            
            return { dataType: {
                type: 'starships',
                counter: 9
                },
                headers: {
                    headerOne: 'Manufacturer',
                    headerTwo: 'Class',
                    headerThree: 'Price'
                }
            }
        })
}
    
export default setStarships;

