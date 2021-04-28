// VUE JS
var app = new Vue ({
    el: '#root',
    data: {
        musicCd: []
    },
    methods: {

    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                const result = response.data.response;
                this.musicCd = result;

                // Bonus 2
                this.musicCd.sort( (a, b) => 
                parseInt(a.year) - parseInt(b.year) 
                );
            });
    },
});