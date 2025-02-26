// ----- this file has been automatically generated - do not edit
import { DataType } from "node-opcua-variant"
import { UABaseDataVariable, UABaseDataVariable_Base } from "node-opcua-nodeset-ua/source/ua_base_data_variable"
/**
 * The base type for all UI Element Types.
 *
 * |                |                                                  |
 * |----------------|--------------------------------------------------|
 * |namespace       |http://opcfoundation.org/UA/DI/                   |
 * |nodeClass       |VariableType                                      |
 * |typedDefinition |1:UIElementType ns=1;i=6246                       |
 * |dataType        |Null                                              |
 * |dataType Name   |undefined ns=0;i=0                                |
 * |isAbstract      |true                                              |
 */
export interface UAUIElement_Base<T, DT extends DataType>  extends UABaseDataVariable_Base<T/*g*/, DT> {
}
export interface UAUIElement<T, DT extends DataType> extends UABaseDataVariable<T, /*m*/DT>, UAUIElement_Base<T, DT /*A*/> {
}