const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
const monthsGR = ['Ιανουραίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου',
                    'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];

window.addEventListener('DOMContentLoaded', function() {
    /*
    |*
    */
   this.setInterval(printGRDate, 1000)

   /*
   |* onclick event on insertnote btn
   */
    document.querySelector('.btn').addEventListener('click', function() {
        insertNote(document.querySelector('#noteText').value.trim())
        reset()
    })

    /*
   |* on-keydown / on-keyup 
   */
    document.querySelector('#noteText').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            insertNote(this.value.trim())
            reset()
        }
    })
})
    function printGRDate() {
        const currentDate = new Date()
        const day = currentDate.getDay()
        const date = currentDate.getDate()
        const month = currentDate.getMonth()
        const year = currentDate.getFullYear()
        const hours = currentDate.getHours()
        const minutes = currentDate.getMinutes()
        const seconds = currentDate.getSeconds()

        let formatedDay = daysGR[day]
        let formatedMonth = monthsGR[month]
        let formatedDate = `${formatedDay}, ${date} ${formatedMonth} ${year}`
        let formatedTime = `${(hours < 10) ? 0 : ''}${hours}:${(minutes < 10) ? 0 : ''}${minutes}:${(seconds < 10) ? 0 : ''}${seconds}`
        document.querySelector('.header').innerHTML = formatedDate 
                                                    + "<br>" 
                                                    + formatedTime
    }

    function insertNote(note) {
        if (!note) {
            return;
        }

        let clone = document.querySelector('.row.hidden').cloneNode(true)
        clone.classList.remove('hidden')

        clone.querySelector('input').addEventListener('click', function() {
            strikeThrough(clone.querySelector('label'))
        })

        clone.querySelector('button').addEventListener('click', function() {
            deleteNote(this.parentNode)
        })

        clone.querySelector('label').innerHTML = note
        document.querySelector('.main').appendChild(clone)
        //document.querySelector('#noteText').placeholder = 'Note'
    }

    function strikeThrough(lbl) {
    lbl.classList.toggle('line-through')
    }

    function deleteNote(note) {
        note.remove()
    }

    function reset() {
        document.querySelector('#noteText').value = ''
    }

