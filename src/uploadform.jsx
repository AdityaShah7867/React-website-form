import './uploadform.css'
import React from 'react'

function Uform() {
    return(
        <div className='uploadd'>
            <h3>UPLOAD NOTES</h3>

            <div className='form-group'>
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>

                
            </div>


        </div>

           
    )
}