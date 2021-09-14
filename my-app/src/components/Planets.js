
function setPlanets() {
        this.setState((state) => {
            
            return { dataType: {
                type: 'planets',
                counter: 2
                },
                headers: {
                    headerOne: 'Climate',
                    headerTwo: 'Terrain',
                    headerThree: 'Population'
                }
            }
        })
}
    
export default setPlanets;