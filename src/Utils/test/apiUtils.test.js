


import { config, getCategory } from '../apiUtils'
import { URL_BASE, AUTORIZATION } from '../constants'


describe('apiUtils', () => {

    it('check headers', () => {

        const headers = { headers: { Authorization: AUTORIZATION } }

        expect(config).toEqual(headers)
    })

    /*it('check proprieties stored', () => {

        const storedPropriety = {
            "categories": [
                {
                    "name": "react",
                    "path": "react"
                },
                {
                    "name": "redux",
                    "path": "redux"
                },
                {
                    "name": "udacity",
                    "path": "udacity"
                }
            ]
        } 

        expect.assertions(1);

        return getCategory().then(data => {

            console.log(data);
            expect(data).toEqual(storedPropriety)
        })
    })*/
})