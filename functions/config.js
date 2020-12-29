// ****************************************************************\\
//const EXECUTE_PROFILE = "dev";
const EXECUTE_PROFILE = "prod";
// ****************************************************************\\

var config_profiles = {
  dev: {
    enviroment: "dev",
    hubspot_key: "c6e4f110-4924-4915-8cc8-98c7969e1e3d",
    firebase_config: {
      apiKey: "AIzaSyBF9WqC7Fj4ibO81SCvVfhjJKTAPePzEFo",
      authDomain: "cerevro-pruebas-cf50g.firebaseapp.com",
      projectId: "cerevro-pruebas-cf50g",
      storageBucket: "cerevro-pruebas-cf50g.appspot.com",
      messagingSenderId: "875432261731",
      appId: "1:875432261731:web:6b4e9c43e5defec0e1e056",
      measurementId: "G-V9T8CQHFHK",
      databaseURL: "https://cerevro-pruebas-cf50g-default-rtdb.firebaseio.com/",
    },
    forms: {
      lead: {
        formId: "8993210",
        portalId: "1d8ecd79-9dfd-43e7-9d50-5d2f33e1ec99",
      },
      commision: {
        formId: "8993210",
        portalId: "4975f128-10ec-43fc-82cc-210cd397038e",
      },
      demo: {
        formId: "8993210",
        portalId: "295eb56b-8341-4212-827f-fd16ba4d763e",
      },
    },
  },
  prod: {
    enviroment: "prod",
    hubspot_key: "1dd3bc29-6e92-4976-99d4-7c8a0f07d8c3",
    forms: {
      lead: {
        formId: "8663531",
        portalId: "ebfb40b0-66ef-4a9c-86ba-9ef37ae84879",
      },
      commision: {
        formId: "8663531",
        portalId: "8975b95a-01e3-4169-bb59-27193979bbcf",
      },
      demo: {
        formId: "8663531",
        portalId: "3a7e067a-02c0-4cbe-ad77-9eb2d394fbec",
      },
    },
  },
};

exports.Config = function () {
  config = config_profiles[EXECUTE_PROFILE || "dev"];

  this.get_enviroment = function () {
    return config.enviroment;
  };

  this.get_hubspot_key = function () {
    return config.hubspot_key;
  };

  this.get_firebase_config = function () {
    return config.firebase_config;
  };

  this.get_hubspot_form_info = function (form_name) {
    return config.forms[form_name];
  };
};
