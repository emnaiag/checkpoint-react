import "./Formulaire.css"
const Formulaire = () => {
  return (
    <div className="form">
      <h2 className="heading">Vos coordonnées</h2>
      <div className="nom">
      <label>Nom</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Saisir votre nom"
      ></input>
     </div>
      <label for="formGroupExampleInput2" class="form-label">
        Prénom
      </label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Saisir votre prénom"
      ></input>
       <fieldset class="row mb-3">
       <div class="btn-genre">
        <legend class="col-form-label col-sm-2 pt-0">Genre</legend>
        
          {/* <div class="form-check">  */}
          
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
              checked
            ></input>
            <label class="form-check-label" for="gridRadios1">
              Homme
            </label>
          {/* </div> */}
          {/* <div class="form-check"> */}
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            ></input>
            <label class="form-check-label" for="gridRadios2">
              Femme
            </label>
           {/* </div> */}
        </div> 

        <label for="inputEmail3" >
          Email
        </label>
        {/* <div class="col-sm-10"> */}
          <input type="email" className="form-control" id="inputEmail3"></input>
        {/* </div> */}
        <label for="exampleFormControlTextarea1" class="form-label">
          Adresse
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
        ></textarea>
        
        <select className="form-select" aria-label="Default select example">
          <option selected>Votre pays</option>
          <option value="1">Tunisie</option>
          <option value="2">Algérie</option>
          <option value="3">Maroc</option>
        </select>
      </fieldset>
      <div className="agree">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="invalidCheck"
        required
      ></input>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      </div>
      {/* <div class="invalid-feedback">You must agree before submitting.</div>
      <div class="col-12"> */}
        <button class="btn btn-primary" type="submit">
          Submit 
        </button>
      {/* </div> */}
    </div>
  );
};

export default Formulaire;
