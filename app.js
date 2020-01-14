new Vue({
    el: '.container',
    data: {
        sel: [],
        questions: []
    },
    mounted: function () {
        this.askQuestions();
        this.cssSelector();
    }, 
    methods: {
        askQuestions: function() {
            var questions = [
                {
                    id: 1,
                    question: 'Who is Supreme Personality of Godhead?',
                    option1: 'Lord Krsna',
                    option2: 'Lord Brahma',
                    option3: 'Lord Shiva',
                    option4: 'Lord Vishnu',
                    answer: 'Lord Krsna',
                    answered: ''
                },
                {
                    id: 2,
                    question: 'Where is Vrindavan?',
                    option1: 'India',
                    option2: 'Pakistan',
                    option3: 'West Virginia',
                    option4: 'Bangladesh',
                    answer: 'India',
                    answered: ''
                },
                {
                    id: 3,
                    question: ' Who created ISKCON?',
                    option1: 'Swami Prabhupada',
                    option2: 'Bhakti Siddhant Saraswati Thakur',
                    option3: 'Rupa Goswami',
                    option4: 'Chaitanya Mahaprabhu',
                    answer: 'Swami Prabhupada',
                    answered: ''
                }
            ];

            this.questions = questions;
        }, 

        cssSelector: function () {
            var sel = {
                group: 'form-group',
                col: 'col-sm-3',
                btn: 'btn btn-primary'
            };

            this.sel = sel;
        },

        checkResult: function(event) {
            var modal = this.questions;
            var len = modal.length;
            var marks = 0;

            for (var i=0; i<len; i++) {
                if(modal[i].answered != '') {
                    if (modal[i].answered == modal[i].answer) {
                        marks++;
                    } else {

                    }
                } else if(modal[i].answered == '') {
                    alert('Please answer all the question '+modal[i].id);
                    return;
                }
            }
            var per = (marks/len)*100;
            alert('You scored '+per+'%');
        }
    }
});
