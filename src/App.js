
import './App.css';

function App() {
  return (
   
    <div className='uploadd'>
            <h3>UPLOAD NOTES</h3>

            <div className='form-group'>

            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">SUBJECT</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
            <option selected>Choose...</option>
            <option value="1">DSA</option>
            <option value="2">MATHS</option>
            <option value="3">Science</option>
            </select>   
            <br></br>

            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">MODULE</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
            <option selected>Choose...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>   
            <br></br>

            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">TYPE</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
            <option selected>Choose...</option>
            <option value="1">NOTES</option>  
            <option value="2">ASSIGNMENT</option>
            <option value="3">IDK?</option>
            </select>   
            {'\n'}
            <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile"/>
            <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
            {"\n"}
            {'\n'}
            <center>
            <button type="button" class="btn btn-danger">{'\n'}SEND FOR VERIFICATION</button>
            </center>

            
            </div>
    
    
    </div>
    
    

  );
}

export default App;
