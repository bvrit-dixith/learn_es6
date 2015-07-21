describe("testing ", function() {
    it("should test es6", function() {

        let i =10;
        expect(i).toBe(10)
    })

    it("provides defaults" , function() {
        var doWork = function(name="dixith") {
            return name;
        }

        var result = doWork();
        expect(result).toBe("dixith");
        var result = doWork("kurra");
        expect(result).toBe("kurra");
    })

    it("provides defaults with destructing" , function() {
        var doWork = function(a=2, b= 2, c=5) {
            return [a, b,c ];
        }

        var [a,b,c] = doWork(5, undefined);
        expect(a).toBe(5);
        expect(b).toBe(2);
        expect(c).toBe(5);
    })

    it("provides defaults with destructing Objects" , function() {
        var doWork = function(url , { data ="dixith", cache="true"}) {
            return data;
        }

        var result = doWork("api/search", {cache: false});
        expect(result).toBe("dixith");
    })

    it("should work with rest parametsr" , function() {

        let doWork = function(name, ...numbers) {

            var result = 0;
            numbers.forEach(function(n){
                result += n;

            })
            return result;
        }

        let result = doWork("d", 1, 2, 3);
        expect(result).toBe(6);
    })

//
    it("should spread a array accross parameters" , function() {
        let doWork = function(x, y, z) {
            return x + y + z;
        }

        var result = doWork(...[1,2,3]);
        expect(result).toBe(6);
    })

    it("should build arrays" , function() {
        let a = [2,3,4]
        let b = [1, ...a, 5,6,7]
//        expect(b).toBe([1,2,3,4,5,6,7]);
    })

    it("should check template literals", function() {

        let cat = "015";
        let id = "00401";
        let url = `api/${cat}/${id}`

        expect(url).toBe("api/015/00401")
    })
//
    it("should check template literals with tags", function() {

        let upper = function(strings , ...values) {
            let result = "";

            for(var i =0 ; i< strings.length; i++) {
                 result += strings[i];
                 if(i < values.length) {
                    result += values[i];
                 }
            }

            return result.toUpperCase();
        }


        let x = 2;
        let y = 3;

        let result = upper `${x} + ${y} is ${x+y}`;
        expect(result).toBe("2 + 3 IS 5");
    })


     it("should check classes", function() {
        class Emol

        var e = new Employee();
        expect(e.getName()).toBe("some")

     })

})