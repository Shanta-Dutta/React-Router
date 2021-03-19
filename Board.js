//you will always need to import React from react
// import {component}when building a class component
import React, {Component} from 'react';
//importing our css file from src>css
import '../css/Board.css';
import Note from'./Note';

class Board extends Component {
    //constructor method available to us in class components
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Star Wars",
          body: "The Star Wars franchise has spawned multiple live-action and animated films. The franchise started with a film trilogy set in medias res—beginning in the middle of the story—which was later expanded to a trilogy of trilogies, better known as the 'Skywalker saga'."
        },
        {
          title: "March of the Penguins",
          body: "Not only was March of the Penguins a legitimate cultural phenomenon when it debuted in 2005, but it's one of the greatest nature documentaries the world has ever seen."
        },
        {
          title: "Won't You Be My Neighbor?",
          body: "If there's one documentary on this list that will have you involuntarily balling your eyes out, it's Won't You Be My Neighbor? The documentary profiles late children's television star Fred Rogers, whose show, Mister Rogers' Neighborhood impacted millions of young (and old!) lives."
        }
      ]
    }
    }
  //re-assigning values like we would on normal js objects, wouldn't trigger a re-render of the component
  //
  // Board.js Board Component Class Function

  // addNote() {
  //   //Saving the data for notes from or state inside of our function, just for ease
  //   let notes = this.state.notes;
  //   // push a static object containing more data for a new note (title,body) to the end of the array of notes in the state
  //   notes.push(
  //     {
  //       title: "New Note Title",
  //       body: "New Note body"
  //     }
  //   );
  addNote() {
    let notes = this.state.notes;
    notes.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        notes: this.state.notes
      }
    );
  }
  // // passing in the id of the notecard from which the 'delete button' was clicked
  deleteNote(id){
    // // creating a new var that holds current notes
    let newNoteArr = this.state.notes;
    // // mapping through array of all notes that's saved in our state, passing in the current note along with the index of that current note
    newNoteArr.map((note, index) => {
      // at ever note (from the array in our state) we check to see if the id passed in matches the id of the note we're currently on
      if (id === note.id) {
        // // if it matches we're removing just one item from that array
        newNoteArr.splice(index,1);
      }
    });
    // // our array now has the same elements minus the one we just deleted
    // // update our state to show that new array which will trigger a re-render
    this.setState(
      {
        notes: newNoteArr
      }
    );
  }


    // calling this.setState on this component and passing in the most updated version of the 
  //   this.setState(
  //     {
  //       notes
  //     }
  //   );
  // }


  // Replaces our 3 hardcoded Note components(below) in the render of our Board component

render() {
  return(
    <div>
    <div className="div-board">
      <div className="row">
      {/* this.state.notes.map(note => {
  	return <Note title={note.title} body={note.body}/>})} */}

   {
            this.state.notes.map(item => {
                return <Note title={item.title} body={item.body}
                key={item.id} id={item.id} deleteHandler={this.deleteNote.bind(this)}
/>
              })
          }

<button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>
  Add
</button>
        
      </div>
    </div>
    </div>
  )} 
   

}

//render method -render what is returned (jsx) onto the browser
//   render() {
//     return (
//       <div>
//         <div className="div-board">
//           <div className="row">
          
//             {/* {<Note title="Class Notes" body="Always use constructors when extending another class"/>
//             <Note title="My New Address" body="2001 N Lonhill Phoenix, AZ 81234"/>
//             <Note title="React Notes" body="Everything in React is a component"/>
//             <Note/>} */}
          
//         </div>
//         </div>
//         <div>
        
//           <button className="btn btn-success add-button mx-3">Add</button>
//         </div>
//       </div>
//     );
//   }
// }

export default Board;