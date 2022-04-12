// Class code examples

        // Declaration with parameters
        function greetStudent(name, lastName) {
            console.log(`¡Hola ${name} ${lastName}!`)
        }


        // Invokation with arguments
        greetStudent('Miguel', 'Delgado')
        greetStudent('Iñigo', 'M')
        greetStudent('Inés', 'García')
        greetStudent('Sara')


        // Default value parameters
        function printBookingDetails(name, date, roomType, price, discount = 0) {
            const totalPrice = price - discount
            const text = `${name}, your reservation for ${date} (${roomType} room) is confirmed. Price: ${totalPrice}€`
            console.log(text)
        }

        printBookingDetails('Nat Canales', '11/11/2021', 'individual', 526)
        printBookingDetails('Patri Escudero', '11/11/2021', 'individual', 526, 20)



           // Example 1 with return
           function composeBookingDetails(name, date, roomType, price, discount = 0) {
            const totalPrice = price - discount
            const text = `${name}, your reservation for ${date} (${roomType} room) is confirmed. Price: ${totalPrice}€`
            return text
        }

        const bookingText1 = composeBookingDetails('Nat Canales', '11/11/2021', 'individual', 526)
        const bookingText2 = composeBookingDetails('Patri Escudero', '11/11/2021', 'individual', 526, 20)

        console.log(`----------
        ${bookingText1}
        ----------`)
        console.log(bookingText2)



        // Example 2 with return
        function isMultiple(val1, val2) {
            const rest = val1 % val2
            const result = rest === 0
            return result
        }


        const result = isMultiple(4, 2)
        const text = `Is 4 a multiple of 2? ${result}`
        console.log(text)



        // Example 3 with return
        function calculateTotalPrice(subtotal, taxPercent) {

            if (typeof subtotal != 'number' || typeof taxPercent != 'number') {
                return 'Invalid values'
            }

            const theTaxPart = subtotal * taxPercent / 100
            const finalResut = subtotal + theTaxPart
            return finalResut

            console.log('I am after a return statement, I will never execute... :(')
        }

        const price = calculateTotalPrice('cappuccino', 7)
        console.log(`The result sent to the BBDD is ${price}€`)


        // Callback example 1
        function sayHi() {
            console.log('¡Hola!')
        }

        function sayBye() {
            console.log('¡A dios!')
        }

        function doSomething(action) {
            console.log('I am doing something')
            action()
        }

        doSomething(sayHi)
        doSomething(sayBye)



        // Callback example 2
        function applyNormalVAT(subtotal) {
            console.log('The final price is ', subtotal * 1.21, '(Reg. tax)')
        }
        function applyReducedVAT(subtotal) {
            console.log('The final price is ', subtotal * 1.1, '(Disc. tax)')
        }
        function applyExemptVAT(subtotal) {
            console.log('The final price is ', subtotal * 1, '(Exempt tax)')
        }

        function getSubtotal(cost, action) {
            const benefit = 1.15
            const subtotal = cost * benefit
            action(subtotal)
        }

        getSubtotal(1000, applyExempVAT)
        getSubtotal(1000, applyReducedVAT)
        getSubtotal(1000, applyNormalVAT)



        // 0 - original function statement 
        function getDouble(value) {
            return value * 2
        }


        // 1 - remove 'functsion' and add arrow!
        const getDouble1 = (value) => {
            return value * 2
        }


        // 2 - remove () for unique-parameter functions
        const getDouble2 = value => {
            return value * 2
        }

        // 3 - remove {} single statement functions (has auto return implemented!)
        const getDouble3 = value => value * 2




        // Example: 
        const generateBookingDetails = (date, price) => `Your reservation for the day ${date} (${price}€) is confirmed`

        // Equivalent to:
        // function generateBookingDetails(date, price){
        //     return `Your reservation for the day ${date} (${price}€) is confirmed`

        // }

        console.log(generateBookingDetails('11/11/11', 876474))


        function printSomething() {
            console.log('This is the built-in arguments object: ', arguments)
            console.log('arguments length: ', arguments.length);
            console.log('first arg: ', arguments[0]);
            console.log('second arg: ', arguments[1]);
        }

        printSomething('hi', 'there')


        function printArgs() {
            for (let i = 0; i < arguments.length; i++) {
                console.log('The argument in position ', i, ' is ', arguments[i]);
            }
        }

        printArgs('hey', 'there', 'ironhacker');
        printArgs(1, 77, { name: 'milo' }, ['cat', 'dog'])
