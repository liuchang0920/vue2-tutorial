//app.js
new Vue({
    el: '#events'
    , data: {
        event: {
            name: ''
            , description: ''
            , date: ''
        }
        , events: []
    }
    , mounted: function () {
        this.fetchEvents();
    }
    , methods: {
        fetchEvents: function () {
            alert("loading file..");
            var events = [
                {
                    id: 1
                    , name: 'TIFF'
                    , description: 'Toronto International Film Festival'
                    , date: '2015-09-10'
      }
                , {
                    id: 2
                    , name: 'The Martian Premiere'
                    , description: 'The Martian comes to theatres.'
                    , date: '2015-10-02'
      }
                , {
                    id: 3
                    , name: 'SXSW'
                    , description: 'Music, film and interactive festival in Austin, TX.'
                    , date: '2016-03-11'
      }
    ];
            this.events = events;
            // this.$set('events', events);
        }
        , addEvent: function () {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = {
                    name: ''
                    , description: ''
                    , date: ''
                }
            }
        }
        , deleteEvent: function (index) {
            if (confirm("sure to delete this event?")) {
                console.log('deleted');
                this.events.splice(index, 1);
            }
        }
    }
});