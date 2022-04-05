#  COMPILER || #branch_01_A
<br/><br/>
<img src="https://github.com/TeoNogueira/TypeScript-2022/blob/season_01_compiler/assets/gifs/ts_anima2.gif" title="Using types - Typescript 2022" align="right" width="95" height="95">


## Tutorial typescript iniciante Season_01 `by:@TeoNogueira` [RepoLink].
<br/><br/>
### Vamos abordar sobre compilador.

Veja alguns exemplos de como compilar o seu código, deixei alguns arquivos dentro da pasta compiler nessa branch. Coloquei coisas importantes como: `noEmitOnError`, `dirOutPut`, `outPutFile`, `sourceMap`, e`noImplictAny`. Para saber mais sobre compilador em typescript [clique aqui].

<br/><br/>

## Lembrando

Instalação do [Typescript].

use `-g` para instalar de forma global.

* installe o coderunner

### Para executar o comando do coderunner(ctrl + alt + n) com ts instale:
 ```sh 
 npm i -g ts-node 
```


## Outros:

* ``` tsc -v``` << "Version".

* ``` tsc --init``` << create file >> "tsconfig.json" instale logo após a instalação do ts.

* ``` npm init -y```

* tsc e o nome do arquivo ts para criar uma réplica em js e poder ser executado.

* ``` tsc -w``` <<< monitorando -- compila o javascript automaticamente em tempo real.
#
<br/>

## Branch Map

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#006b69', 'edgeLabelBackground':'#bbdada', 'tertiaryColor': '#dcaab9', 'primaryTextColor': 'white'}}}%%

graph LR

id1>Clique Abaixo no mapa]

```

  ```mermaid

%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#285570', 'edgeLabelBackground':'#777777', 'tertiaryColor': '#285570', 'primaryTextColor': 'white', 'lineColor': '#D4EFDF'}}}%%

flowchart LR;

 1A:::someclass
    classDef someclass fill:#bd492e;
    
1(Season_01) --> 1A(Compiler_1A) 
1(Season_01) --> 1B(Ts_Ecmascript_News_1B) 
A((Master)) --> 1((Season_01_using_types)) -->|Next_Season| 2((S_02)) --> |Next_Season| 3((S_03))
2[Season_02_Class_Object]--> 2A(Mod_nameSpace 2A)

3(Season_03_interfaces_generics_decorators) 
4((Season_04_lib_Js_Ts)) --> 4A((TS + GULP 4A))
A((Master)) --> 4((Season_04_lib_Js_Ts)) -->|Next_Season|5(S_05)


5(Season_05) --> 5A(TS REACT 5A) 
5(Season_05_webpack) --> 5B(TS VUEJS 5B)



     linkStyle 0 stroke-width:2px,fill:none,stroke:blue;
        linkStyle 1 stroke-width:2px,fill:none,stroke:orange;
        linkStyle 2 stroke-width:2px,fill:none,stroke:gray;
        linkStyle 3 stroke-width:2px,fill:none,stroke:purple;
        linkStyle 4 stroke-width:2px,fill:none,stroke:purple;
          linkStyle 5 stroke-width:2px,fill:none,stroke:gray;
          linkStyle 6 stroke-width:2px,fill:none,stroke:gray;
          linkStyle 7 stroke-width:2px,fill:none,stroke:orange;
          linkStyle 8 stroke-width:2px,fill:none,stroke:purple;
          linkStyle 9 stroke-width:2px,fill:none,stroke:gray;
          linkStyle 10 stroke-width:2px,fill:none,stroke:gray;


click A "https://github.com/TeoNogueira/TypeScript-2022/tree/master"
click 1 "https://github.com/TeoNogueira/TypeScript-2022/tree/season_01"
click 1A "https://github.com/TeoNogueira/TypeScript-2022/tree/season_01_compiler"
click 1B "https://github.com/TeoNogueira/TypeScript-2022/tree/season_01_b"
click 2 "https://github.com/TeoNogueira/TypeScript-2022/tree/season_02"
click 2A "https://github.com/TeoNogueira/TypeScript-2022/tree/season_02_b"
click 3 "https://github.com/TeoNogueira/TypeScript-2022/tree/season_03"
click 4 "https://github.com/TeoNogueira/TypeScript-2022/tree/season_04"
click 4A "https://github.com/TeoNogueira/TypeScript-2022/tree/season_04_a"
click 5 "https://github.com/TeoNogueira/TypeScript-2022/tree/season_05"
click 5A "https://github.com/TeoNogueira/TypeScript-2022/tree/ts_react"
click 5B "https://github.com/TeoNogueira/TypeScript-2022/tree/ts_vueJs"

 ```
#

[RepoLink]: https://github.com/TeoNogueira/TypeScript-2022
[Typescript]: https://www.npmjs.com/package/typescript
[Teonogueira]: https://github.com/postcss/sugarss
[Package Control]: https://packagecontrol.io/
[clique aqui]: https://www.typescriptlang.org/docs/handbook/compiler-options.html 
## <div align="center">`Adicione esse repositório na sua lista de favoritos!`</div>
