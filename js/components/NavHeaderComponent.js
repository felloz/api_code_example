Vue.component("api-code", {
  template:
    /*html*/
    ` 
    <div>
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a :class="activeClass.php"  v-on:click="changeView('php')">PHP</a>
                    </li>
                    <li class="nav-item">
                        <a :class="activeClass.python"  v-on:click="changeView('python')">Python</a>
                    </li>
                    <li class="nav-item">
                        <a :class="activeClass.csharp"  v-on:click="changeView('csharp')">C#</a>
                    </li>                  
                </ul>
            </div>
            <div class="card-body">                           
                    <pre>
                        <code class="php">
                            {{language}}
                        </code>
                    </pre>                                                                                              
            </div>
        </div>
    </div>
    `,
  data() {
    return {
      activeClass: {
        php: "nav-link active",
        python: "nav-link",
        csharp: "nav-link",
      },
      language: ` 
      class Hello
      {
        public $name = "php";
      }
      `,
    };
  },
  methods: {
    changeView(lang) {
      this.language = lang;
      this.show(lang);
      if (lang == "php") {
        console.log("php");
        this.activeClass.php = "nav-link active";
        this.activeClass.python = "nav-link";
        this.activeClass.csharp = "nav-link";
      }

      if (lang == "python") {
        console.log("python");
        this.activeClass.python = "nav-link active";
        this.activeClass.php = "nav-link";
        this.activeClass.csharp = "nav-link";
      }

      if (lang == "csharp") {
        console.log("csharp");
        this.activeClass.csharp = "nav-link active";
        this.activeClass.php = "nav-link";
        this.activeClass.python = "nav-link";
      }
    },
    show(lang) {
      if (!lang) {
        lang = "php";
      }
      if (lang == "php") {
        this.language = ` 
        class Hello
        {
          public $name = "php";
        }
        `;
        console.log(this.language);
      }
      if (lang == "python") {
        this.language = ` 
        class Hello
        {
          public $name = pyhon;
        }
        `;
        console.log(this.language);
      }
    },
  },
});

let app = new Vue({
  el: "#app",
  data: {
    message: "Hello",
  },
});
/*<div>
        <h1>Highlightjs</h1>
        <pre>
            <code class="php">
                class Hello
                {
                    public $name = "Luis";
                }
            </code>
        </pre>
    </div>*/
