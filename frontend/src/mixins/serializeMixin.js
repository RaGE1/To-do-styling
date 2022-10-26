export default {
    data(){
        
    },
    methods:{
          serialize() {
            let cnt = 0;
            this.tasks.forEach((item) => {
              item.id = cnt++;
            });
          },
    },
    computed:{
        
    }
}