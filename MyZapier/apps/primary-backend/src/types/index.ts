
export interface ZapState {
  trigger : Trigger;
  action : Action[];
}


interface Trigger{
    id : string;
    zapId : string;
    triggerId : string;
    triggerName? : string;
};

interface ActionMetadata{
  text : string;
  type : string;
  appName : string;
  operation : string;
  documentId : string;
}

interface Action{
id : string;
actionId : string;
zapId : string;
metadata : ActionMetadata
index : number;
}