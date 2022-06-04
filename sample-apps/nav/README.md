
|Snippets|Content|
|---|---|
|imr|Import React|
|imro|Import React as Object|
|imrc|Import React Component|
|imrpc|Import React PureComponent|
|imrn|Import React-Native Element|
|ims|Import Styled-Components|
|imsn|Import Styled-Components Native|
|impt|Import PropTypes|
|rct|Redux constant|
|crr|Connect Redux|
|sl|Stateless Component|
|slr|Stateless Component Return|
|slc|Stateless Component Function|
|ccs|Component Class|
|cccs|Component Class With Constructor|
|ccsf|Component Class FlowType|
|pcs|PureComponent Class|
|pccs|PureComponent Class With Constructor|
|pcsf|PureComponent FlowType|
|ccsr|Component Class With Redux|
|edccs|Export default Component Class|
|rrd|Redux Reducer|
|rpf|Redux Pure Function|
|rpc|Redux Pure Function Const|
|cwm|ComponentWillMount|
|cdm|ComponentDidMount|
|cdu|ComponentDidUpdate|
|scu|ShouldComponentUpdate|
|cwu|ComponentWillUpdate|
|cwum|ComponentWillUnmount|
|cwrp|ComponentWillReceiveProps|
|cdc|ComponentDidCatch|
|cct|Create Context|
|gds|getDerivedStateFromProps|
|rnss|StyleSheet Style|
|ess|EStyleSheet Style|
|ed|Export default|
|edl|EslintDisableLine|
|ednl|EslintDisableNextLine|
|styc|Styled Component|
|estyc|Export Styled Component|
|edstyc|Export default Styled Component|
|cmmb|Comment Big Block|
|log|Console Log|
|cl|Standard console.log|
|tt|Test|
|tdesc|Test Describe|
|tit|Test It|
|ffm|FlowFixMe|
|rnstory|React-Native Story|
|rstory|React Story|
|rsf|React Stateless Function|


# The Component Lifecycle

## Mounting (created/inserted into DOM)
These methods are called in the following order when an instance of a component is being created and inserted into the DOM (bold implies commonly used):
- ***`constructor()`***
- static get­Derived­State­From­Props
- ***`render()`*** `*`
- ­React updates ­D­O­M and refs
- ***`component­Did­Mount()`***

## Updating (re-rendered)
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
- ***`New props`*** || ***`setState()`*** || ***`force­Update()`*** 
  - ***`render()`*** `*`
    - static get­Derived­State­From­Props()
    - should­Component­Update()
```js
           • render()
```
  - get­Snapshot­Before­Update ("Pre-commit phase": Can read the DOM.)
  - React updates ­D­O­M and refs`**` 
  - ***`component­Did­Update()`***

## Unmounting (removals from DOM)
This method is called when a component is being removed from the DOM:
 - component­Will­Unmount`**`


`* ` ***`The Render Phase`*** `: Pure. Has no side effects. May be paused, aborted or restarted by React.`

`** ` ***`The Commit Phase`*** `: Can work with DOM, run side effects, schedule updates.`