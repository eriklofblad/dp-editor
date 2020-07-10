const xmlData = `<?xml  version="1.0" encoding="UTF-8"?>
<!DOCTYPE tree [
<!ELEMENT tree (branch)+>
<!ELEMENT branch (node)+>
<!ELEMENT node (path_segment,parent_path_segment?,value?)>
<!ELEMENT path_segment (#PCDATA)>
<!ELEMENT parent_path_segment (#PCDATA)>
<!ELEMENT value (#PCDATA)>
]>
<tree>
<branch>

<node>
<path_segment>dp_20200709090613_hie006_imp1</path_segment>
<parent_path_segment></parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\basedon</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1</parent_path_segment>
<value>wizard_lib</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\commonprops</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\commonprops\\commonprop2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\commonprops</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\commonprops\\commonprop2\\must</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\commonprops\\commonprop2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\commonprops\\commonprop2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\commonprops\\commonprop2</parent_path_segment>
<value>STUDY_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\getereport</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\minimum_study_age</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1</parent_path_segment>
<value>PrevSameDescription</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\sortby</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\sortby\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\sortby</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\sortby\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\sortby</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\sortby\\studiesnumber</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata1\\sortby</parent_path_segment>
<value>10</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\basedon</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2</parent_path_segment>
<value>wizard_lib</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop2\\must</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop2</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop2</parent_path_segment>
<value>CT</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop3\\must</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop3</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop3</parent_path_segment>
<value>TAMAR_STUDY_BODY_PART</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\differentprops\\differentprop3</parent_path_segment>
<value>CHEST</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\getereport</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\minimum_study_age</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2</parent_path_segment>
<value>PrevCT_CHEST</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\sortby</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\sortby\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\sortby</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\sortby\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\sortby</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\sortby\\studiesnumber</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata2\\sortby</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3\\basedon</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3</parent_path_segment>
<value>baseline_body_descr</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3\\getereport</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3\\minimum_study_age</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\additionaldata3</parent_path_segment>
<value>baseline_body_descr</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\loadkeyimagesonly</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\additionaldata\\use_compound_modality</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\additionaldata</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\changed_by_converter_11.1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\dp_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value>Standard_DP</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\enable</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\conditions</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\conditions\\condition1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\conditions</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\conditions\\condition1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\conditions\\condition1</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\conditions\\condition1\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\conditions\\condition1</parent_path_segment>
<value>CR,DR,DX</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item1</parent_path_segment>
<value>RestDistinct</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\items\\item2</parent_path_segment>
<value>RestDistinct</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\groupingrules\\groupingrule1</parent_path_segment>
<value>For Chest  all in one</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\locked_for_edit</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value>CR Lungor Erik</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>AllInOneGroup_CR0_PA</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup1\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10</parent_path_segment>
<value>AllinonegroupCR9</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1</parent_path_segment>
<value>9</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup10\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11</parent_path_segment>
<value>AllinonegroupCR10</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1</parent_path_segment>
<value>10</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup11\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12</parent_path_segment>
<value>Allinonegroupfirst</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup12\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13</parent_path_segment>
<value>AllinonegroupCR11</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1</parent_path_segment>
<value>11</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup13\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value2</parent_path_segment>
<value>front|PA</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup14\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value2</parent_path_segment>
<value>sida|side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup15\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16</parent_path_segment>
<value>baseline_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2</parent_path_segment>
<value>front</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2</parent_path_segment>
<value>PA</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3</parent_path_segment>
<value>CR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3</parent_path_segment>
<value>DX</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3</parent_path_segment>
<value>RF</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup16\\value3</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17</parent_path_segment>
<value>h1_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value2</parent_path_segment>
<value>front|PA</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3</parent_path_segment>
<value>CR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3</parent_path_segment>
<value>DX</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3</parent_path_segment>
<value>RF</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup17\\value3</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18</parent_path_segment>
<value>h2_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value2</parent_path_segment>
<value>front|PA</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3</parent_path_segment>
<value>CR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3</parent_path_segment>
<value>DX</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3</parent_path_segment>
<value>RF</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup18\\value3</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19</parent_path_segment>
<value>h3_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1</parent_path_segment>
<value>3</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2</parent_path_segment>
<value>100</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2</parent_path_segment>
<value>200</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup19\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>AllInOneGroup_CR1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup2\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20</parent_path_segment>
<value>h4_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1</parent_path_segment>
<value>4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2</parent_path_segment>
<value>100</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2</parent_path_segment>
<value>200</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup20\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21</parent_path_segment>
<value>h5_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1</parent_path_segment>
<value>5</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2</parent_path_segment>
<value>100</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2</parent_path_segment>
<value>200</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup21\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22</parent_path_segment>
<value>h6_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1</parent_path_segment>
<value>6</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2</parent_path_segment>
<value>100</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2</parent_path_segment>
<value>200</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup22\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23</parent_path_segment>
<value>h7_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1</parent_path_segment>
<value>7</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2</parent_path_segment>
<value>100</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2</parent_path_segment>
<value>200</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup23\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24</parent_path_segment>
<value>h8_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1</parent_path_segment>
<value>8</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2</parent_path_segment>
<value>100</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2</parent_path_segment>
<value>200</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup24\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25</parent_path_segment>
<value>h9_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1</parent_path_segment>
<value>9</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2</parent_path_segment>
<value>100</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2</parent_path_segment>
<value>200</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup25\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26</parent_path_segment>
<value>h10_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1</parent_path_segment>
<value>10</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2</parent_path_segment>
<value>100</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2</parent_path_segment>
<value>200</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup26\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27</parent_path_segment>
<value>Cur_sida</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value2</parent_path_segment>
<value>sida</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup27\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28</parent_path_segment>
<value>h1_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value2</parent_path_segment>
<value>sid</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3</parent_path_segment>
<value>CR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3</parent_path_segment>
<value>DX</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3</parent_path_segment>
<value>RF</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value3</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4</parent_path_segment>
<value>bedside</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4</parent_path_segment>
<value>vrid</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup28\\value4</parent_path_segment>
<value>Not_Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29</parent_path_segment>
<value>h2_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value2</parent_path_segment>
<value>sid</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3</parent_path_segment>
<value>CR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3</parent_path_segment>
<value>DX</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3</parent_path_segment>
<value>RF</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup29\\value3</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3</parent_path_segment>
<value>AllInOneGroup_CR2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup3\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30</parent_path_segment>
<value>basline_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value2</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value2</parent_path_segment>
<value>sid</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3</parent_path_segment>
<value>CR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3</parent_path_segment>
<value>DX</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3</parent_path_segment>
<value>RF</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value3</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4</parent_path_segment>
<value>VIEW_POSITION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4</parent_path_segment>
<value>AP</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4</parent_path_segment>
<value>PA</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup30\\value4</parent_path_segment>
<value>Not_Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31</parent_path_segment>
<value>h1_ct_cor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value2</parent_path_segment>
<value>TAMAR_IMAGE_ORIENTATION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value2</parent_path_segment>
<value>cor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value3</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value3</parent_path_segment>
<value>CT</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value3\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value3</parent_path_segment>
<value>Equal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value4</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value4\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value4</parent_path_segment>
<value>topo&amp;MIP</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value4\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value4</parent_path_segment>
<value>Not_Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value5</parent_path_segment>
<value>IMAGE_TYPE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value5\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value5</parent_path_segment>
<value>localizer</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value5\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value5</parent_path_segment>
<value>Not_Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value6\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value6</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value6\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value6</parent_path_segment>
<value>10000</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value6\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup31\\value6</parent_path_segment>
<value>Not_Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32</parent_path_segment>
<value>h1_ct_sag</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value2</parent_path_segment>
<value>TAMAR_IMAGE_ORIENTATION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value2</parent_path_segment>
<value>sag</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value3</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value3</parent_path_segment>
<value>CT</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value3\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value3</parent_path_segment>
<value>Equal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value4</parent_path_segment>
<value>IMAGE_TYPE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value4\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value4</parent_path_segment>
<value>localizer&amp;surview</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value4\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value4</parent_path_segment>
<value>Not_Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value5</parent_path_segment>
<value>SERIES_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value5\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value5</parent_path_segment>
<value>surview&amp;summary&amp;localizer</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value5\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value5</parent_path_segment>
<value>Not_Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value6\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value6</parent_path_segment>
<value>SERIES_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value6\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value6</parent_path_segment>
<value>10000</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value6\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup32\\value6</parent_path_segment>
<value>Not_Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4</parent_path_segment>
<value>AllInOneGroup_CR3</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1</parent_path_segment>
<value>3</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup4\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5</parent_path_segment>
<value>AllinonegroupCR4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1</parent_path_segment>
<value>4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup5\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6</parent_path_segment>
<value>AllinonegroupCR5</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1</parent_path_segment>
<value>5</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup6\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7</parent_path_segment>
<value>AllinonegroupCR6</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1</parent_path_segment>
<value>6</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup7\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8</parent_path_segment>
<value>AllinonegroupCR7</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1</parent_path_segment>
<value>7</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup8\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9</parent_path_segment>
<value>AllinonegroupCR8</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1\\index</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1</parent_path_segment>
<value>8</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1</parent_path_segment>
<value>STUDY_INSTANCE_UID</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1\\sort</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value1</parent_path_segment>
<value>reference</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value2</parent_path_segment>
<value>Group_All_Images</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value2</parent_path_segment>
<value>True</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value2\\valuetype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\nominalgroups\\nominalgroup9\\value2</parent_path_segment>
<value>GroupAttribute</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\organizer</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\organizer\\properties</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\organizer</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\organizer\\properties\\open_organizer</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\organizer\\properties</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\monitors</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\multi_desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\non_dicom_desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\groups</parent_path_segment>
<value>.</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\layout</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\layout</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider0</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\groups</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\groups</parent_path_segment>
<value>h1_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\groups</parent_path_segment>
<value>h1_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\groups</parent_path_segment>
<value>AllinonegroupCR4.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider5</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\groups</parent_path_segment>
<value>AllinonegroupCR5.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider6</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\groups</parent_path_segment>
<value>Allinonegroupfirst.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\content provider7</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\scout_localizer_only</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\groups</parent_path_segment>
<value>Any</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\content providers\\default\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\enable_auto_sequence_cmd</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule\\buildrule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule</parent_path_segment>
<value>X(210,210),(420),(210,210),(),(),(210,210),(140,140,140),(),(),(),(140,140,140),(),(),()</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule</parent_path_segment>
<value>4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\rule</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value>New + Prior</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>h1_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10</parent_path_segment>
<value>AllinonegroupCR5</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup10\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>Allinonegroupfirst</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3</parent_path_segment>
<value>AllInOneGroup_CR1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4</parent_path_segment>
<value>AllinonegroupCR6</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5</parent_path_segment>
<value>baseline_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup7\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8</parent_path_segment>
<value>h1_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup8\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9</parent_path_segment>
<value>AllinonegroupCR4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\nominalgroups\\nominalgroup9\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\selection</parent_path_segment>
<value>group</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel1</parent_path_segment>
<value>PNL.PNL_GenericPanel</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\groups</parent_path_segment>
<value>.</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\layout</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\layout</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider0</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\groups</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\groups</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\groups</parent_path_segment>
<value>h1_ct_cor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\groups</parent_path_segment>
<value>h1_ct_sag</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\content provider4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\scout_localizer_only</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\groups</parent_path_segment>
<value>Any</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\content providers\\default\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\enable_auto_sequence_cmd</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\rule\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\rule</parent_path_segment>
<value>4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\rule\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\rule</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\rule</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\layout\\size</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value>New + CT</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3</parent_path_segment>
<value>h1_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4</parent_path_segment>
<value>h1_ct_cor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5</parent_path_segment>
<value>h1_ct_sag</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\selection</parent_path_segment>
<value>group</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel2</parent_path_segment>
<value>PNL.PNL_GenericPanel</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\groups</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\groups</parent_path_segment>
<value>h1_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\groups</parent_path_segment>
<value>h2_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\groups</parent_path_segment>
<value>baseline_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\groups</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider5</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\groups</parent_path_segment>
<value>h1_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider6</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\groups</parent_path_segment>
<value>h2_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider7</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\groups</parent_path_segment>
<value>basline_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\content provider8</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\scout_localizer_only</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\groups</parent_path_segment>
<value>Any</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\content providers\\default\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\enable_auto_sequence_cmd</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule\\buildrule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule</parent_path_segment>
<value>X(210,210),(420),(420),(),(210,210),(140,140,140),(),(),(),(140,140,140),(),(),()</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule</parent_path_segment>
<value>4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\rule</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\layout\\size</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value>Historik</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>h2_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>basline_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3</parent_path_segment>
<value>baseline_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4</parent_path_segment>
<value>AllinonegroupCR6</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7</parent_path_segment>
<value>h1_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup7\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8</parent_path_segment>
<value>h1_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup8\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9</parent_path_segment>
<value>h2_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\nominalgroups\\nominalgroup9\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\selection</parent_path_segment>
<value>group</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel3</parent_path_segment>
<value>PNL.PNL_GenericPanel</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\groups</parent_path_segment>
<value>.</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\layout</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\layout</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider0</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\groups</parent_path_segment>
<value>c_frontal.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h1_frontal.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group10</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h4_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group11</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h5_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h6_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h7_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h8_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h9_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h10_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>baseline_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group8</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h2_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups\\group9</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\groups</parent_path_segment>
<value>h3_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\content provider2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\scout_localizer_only</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\groups</parent_path_segment>
<value>Any</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\content providers\\default\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\enable_auto_sequence_cmd</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\rule\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\rule</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\rule\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\rule</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\rule</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\layout\\size</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value>History channel w baseline</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>h1_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\selection</parent_path_segment>
<value>group</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration1\\panel4</parent_path_segment>
<value>PNL.PNL_GenericPanel</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\monitors</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\multi_desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\groups</parent_path_segment>
<value>AllInOneGroup_CR0_PA.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>c_frontal.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group10</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h9_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group11</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h10_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h1_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h2_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h3_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h4_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h5_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h6_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group8</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h7_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups\\group9</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>h8_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param1\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param1</parent_path_segment>
<value>Pan</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param1</parent_path_segment>
<value>ELSCINT1_PRESENTATION_RELATIVE_CENTER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param1\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param1</parent_path_segment>
<value>0,\\0,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param2\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param2</parent_path_segment>
<value>Pan Side Details</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param2</parent_path_segment>
<value>TAMAR_PAN_SIDE_DETAILS</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param2</parent_path_segment>
<value>0,\\0,\\0,\\0,\\1,\\0\\0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param3\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param3</parent_path_segment>
<value>WindowInverse</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param3</parent_path_segment>
<value>ELSCINT1_INVERSE_WINDOW</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param3</parent_path_segment>
<value>N</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param4\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param4</parent_path_segment>
<value>EnhanceFactor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param4</parent_path_segment>
<value>TAMAR_ENHANCE_WEIGHT_FACTOR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param4\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\params\\param4</parent_path_segment>
<value>1,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>STUDY_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule2\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule2\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\sortingrules\\rule2</parent_path_segment>
<value>SERIES_DATE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\groups</parent_path_segment>
<value>AllInOneGroup_CR2.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\groups</parent_path_segment>
<value>AllInOneGroup_CR3.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\groups</parent_path_segment>
<value>AllinonegroupCR4.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider5</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\groups</parent_path_segment>
<value>AllinonegroupCR5.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider6</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\groups</parent_path_segment>
<value>AllinonegroupCR6.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\content provider7</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers\\scout_localizer_only</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule\\buildrule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule</parent_path_segment>
<value>X(210,210),(420),(),(420),()</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\rule</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value>Chest Current</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>AllInOneGroup_CR2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>AllInOneGroup_CR1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3</parent_path_segment>
<value>AllInOneGroup_CR3</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4</parent_path_segment>
<value>AllinonegroupCR4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5</parent_path_segment>
<value>AllinonegroupCR5</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6</parent_path_segment>
<value>AllinonegroupCR6</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup7\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8</parent_path_segment>
<value>AllInOneGroup_CR0_PA</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\nominalgroups\\nominalgroup8\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\selection</parent_path_segment>
<value>group</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel1</parent_path_segment>
<value>Viewer</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\groups</parent_path_segment>
<value>AllInOneGroup_CR1.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\groups</parent_path_segment>
<value>AllInOneGroup_CR2.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\groups</parent_path_segment>
<value>AllInOneGroup_CR3.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\groups</parent_path_segment>
<value>AllinonegroupCR4.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\groups</parent_path_segment>
<value>AllinonegroupCR5.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider5</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\groups</parent_path_segment>
<value>AllinonegroupCR6.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\content provider6</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers\\scout_localizer_only</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\rule\\buildrule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\rule</parent_path_segment>
<value>X(420),(210,210),(140,140,140),(),(),(),(140,140,140),(),(),()</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\rule</parent_path_segment>
<value>Asymmetric</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</parent_path_segment>
<value>Chest prior</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>AllInOneGroup_CR1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>AllInOneGroup_CR2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3</parent_path_segment>
<value>AllInOneGroup_CR3</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4</parent_path_segment>
<value>AllinonegroupCR4</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5</parent_path_segment>
<value>AllinonegroupCR5</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6</parent_path_segment>
<value>AllinonegroupCR6</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\selection</parent_path_segment>
<value>group</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel2</parent_path_segment>
<value>PNL.PNL_GenericPanel</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\groups</parent_path_segment>
<value>AllinonegroupCR7.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\groups</parent_path_segment>
<value>AllinonegroupCR8.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\groups</parent_path_segment>
<value>AllinonegroupCR9.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\groups</parent_path_segment>
<value>AllinonegroupCR10.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\groups</parent_path_segment>
<value>AllinonegroupCR11.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider5</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\groups</parent_path_segment>
<value>Allinonegroupfirst.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\content provider6</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers\\scout_localizer_only</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\rule\\buildrule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\rule</parent_path_segment>
<value>X(420),(210,210),(140,140,140),(),(),(),(140,140,140),(),(),()</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\rule</parent_path_segment>
<value>Asymmetric</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</parent_path_segment>
<value> Chest Prior </value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>AllinonegroupCR7</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>AllinonegroupCR8</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3</parent_path_segment>
<value>AllinonegroupCR9</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4</parent_path_segment>
<value>Allinonegroupfirst</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5</parent_path_segment>
<value>AllinonegroupCR10</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup5\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6</parent_path_segment>
<value>AllinonegroupCR11</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\nominalgroups\\nominalgroup6\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\selection</parent_path_segment>
<value>group</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panels\\configuration2\\panel3</parent_path_segment>
<value>PNL.PNL_GenericPanel</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\monitors</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\multi_desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\non_dicom_desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\groups</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\groups</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider2</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\groups</parent_path_segment>
<value>AllInOneGroup_CR2.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param1\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param1</parent_path_segment>
<value>Pan</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param1</parent_path_segment>
<value>ELSCINT1_PRESENTATION_RELATIVE_CENTER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param1\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param1</parent_path_segment>
<value>0,\\0,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param2\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param2</parent_path_segment>
<value>Pan Side Details</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param2</parent_path_segment>
<value>TAMAR_PAN_SIDE_DETAILS</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param2</parent_path_segment>
<value>0,\\0,\\0,\\0,\\1,\\0\\0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param3\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param3</parent_path_segment>
<value>WindowInverse</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param3</parent_path_segment>
<value>ELSCINT1_INVERSE_WINDOW</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param3</parent_path_segment>
<value>N</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param4\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param4</parent_path_segment>
<value>EnhanceFactor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param4</parent_path_segment>
<value>TAMAR_ENHANCE_WEIGHT_FACTOR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param4\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\params\\param4</parent_path_segment>
<value>1,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\groups</parent_path_segment>
<value>AllInOneGroup_CR3.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param1\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param1</parent_path_segment>
<value>Pan</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param1</parent_path_segment>
<value>ELSCINT1_PRESENTATION_RELATIVE_CENTER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param1\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param1</parent_path_segment>
<value>0,\\0,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param2\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param2</parent_path_segment>
<value>Pan Side Details</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param2</parent_path_segment>
<value>TAMAR_PAN_SIDE_DETAILS</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param2</parent_path_segment>
<value>0,\\0,\\0,\\0,\\1,\\0\\0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param3\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param3</parent_path_segment>
<value>WindowInverse</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param3</parent_path_segment>
<value>ELSCINT1_INVERSE_WINDOW</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param3</parent_path_segment>
<value>N</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param4\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param4</parent_path_segment>
<value>EnhanceFactor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param4</parent_path_segment>
<value>TAMAR_ENHANCE_WEIGHT_FACTOR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param4\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\params\\param4</parent_path_segment>
<value>1,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\content provider4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\groups</parent_path_segment>
<value>Any</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\default\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers\\scout_localizer_only</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\enable_auto_sequence_cmd</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule\\buildrule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule</parent_path_segment>
<value>X(210,210),(420),(420),(),(420),(140,140,140),(),(),()</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\rule</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\layout\\size</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value>Current</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>c_side</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value>c_frontal</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\defaultsortkeygroup</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules\\sortfirstbyseries</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\nominalgroups\\nominalgroup2\\sortingrules</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\selection</parent_path_segment>
<value>image</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration1\\panel1</parent_path_segment>
<value>Viewer</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\monitors</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\multi_desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\autolink</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\autoscout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\groups</parent_path_segment>
<value>AllInOneGroup_CR0.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\linked</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value>-1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param1\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param1</parent_path_segment>
<value>Pan</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param1</parent_path_segment>
<value>ELSCINT1_PRESENTATION_RELATIVE_CENTER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param1\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param1</parent_path_segment>
<value>0,\\0,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param2\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param2</parent_path_segment>
<value>Pan Side Details</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param2</parent_path_segment>
<value>TAMAR_PAN_SIDE_DETAILS</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param2</parent_path_segment>
<value>0,\\0,\\0,\\0,\\1,\\0\\0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param3\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param3</parent_path_segment>
<value>WindowInverse</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param3</parent_path_segment>
<value>ELSCINT1_INVERSE_WINDOW</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param3</parent_path_segment>
<value>N</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param4\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param4</parent_path_segment>
<value>EnhanceFactor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param4</parent_path_segment>
<value>TAMAR_ENHANCE_WEIGHT_FACTOR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param4\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\params\\param4</parent_path_segment>
<value>1,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\groups</parent_path_segment>
<value>AllInOneGroup_CR2.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\linked</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value>-1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param1\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param1</parent_path_segment>
<value>Pan</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param1</parent_path_segment>
<value>ELSCINT1_PRESENTATION_RELATIVE_CENTER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param1\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param1</parent_path_segment>
<value>0,\\0,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param2\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param2</parent_path_segment>
<value>Pan Side Details</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param2</parent_path_segment>
<value>TAMAR_PAN_SIDE_DETAILS</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param2</parent_path_segment>
<value>0,\\0,\\0,\\0,\\1,\\0\\0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param3\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param3</parent_path_segment>
<value>WindowInverse</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param3</parent_path_segment>
<value>ELSCINT1_INVERSE_WINDOW</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param3</parent_path_segment>
<value>N</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param4\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param4</parent_path_segment>
<value>EnhanceFactor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param4</parent_path_segment>
<value>TAMAR_ENHANCE_WEIGHT_FACTOR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param4\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\params\\param4</parent_path_segment>
<value>1,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider3</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\groups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\groups\\group1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\groups</parent_path_segment>
<value>AllInOneGroup_CR3.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\layout\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\layout\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\layout\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\layout</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\linked</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value>-1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param1\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param1</parent_path_segment>
<value>Pan</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param1</parent_path_segment>
<value>ELSCINT1_PRESENTATION_RELATIVE_CENTER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param1\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param1</parent_path_segment>
<value>0,\\0,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param2\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param2</parent_path_segment>
<value>Pan Side Details</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param2</parent_path_segment>
<value>TAMAR_PAN_SIDE_DETAILS</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param2\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param2</parent_path_segment>
<value>0,\\0,\\0,\\0,\\1,\\0\\0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param3\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param3</parent_path_segment>
<value>WindowInverse</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param3\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param3</parent_path_segment>
<value>ELSCINT1_INVERSE_WINDOW</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param3\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param3</parent_path_segment>
<value>N</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param4\\description</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param4</parent_path_segment>
<value>EnhanceFactor</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param4\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param4</parent_path_segment>
<value>TAMAR_ENHANCE_WEIGHT_FACTOR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param4\\value</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\params\\param4</parent_path_segment>
<value>1,</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\content providers\\content provider4</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\default_gda_type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value>VIEWER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\desktop</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule\\buildrule</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule</parent_path_segment>
<value>X(210,210),(420),(420),(),(420),(140,140,140),(),(),()</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule\\columns</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule\\rows</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\rule</parent_path_segment>
<value>Matrix</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size\\height</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size\\left</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size\\top</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size\\units</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>Monitors</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size\\width</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\layout\\size</parent_path_segment>
<value>2</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value>Current</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value>AllInOneGroup_CR0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\ascending</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1\\tag</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\nominalgroups\\nominalgroup1\\sortingrules\\rule1</parent_path_segment>
<value>IMAGE_NUMBER</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\precreate</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\selection</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\selection\\selection_mode</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\selection</parent_path_segment>
<value>image</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1\\type</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\panelsnohistory\\configuration2\\panel1</parent_path_segment>
<value>Viewer</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\statistics</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\statistics\\count</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\statistics</parent_path_segment>
<value>70953</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\statistics\\last_used</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\statistics</parent_path_segment>
<value>07-09-2020 16:24:30</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\use_auto_reg</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\use_full_screen</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value>0</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\version</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value>11.1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1</parent_path_segment>
<value>MODALITY</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1\\conditiontype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1\\must</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1</parent_path_segment>
<value>CR</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition1</parent_path_segment>
<value>DX</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions</parent_path_segment>
<value></value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2\\name</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2</parent_path_segment>
<value>STUDY_DESCRIPTION</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2\\conditiontype</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2</parent_path_segment>
<value>Contains</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2\\must</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2</parent_path_segment>
<value>1</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2\\value1</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2</parent_path_segment>
<value>PULM</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2\\value2</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2</parent_path_segment>
<value>BEDSIDE</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2\\value3</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2</parent_path_segment>
<value>CHEST</value>
</node>

<node>
<path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2\\value4</path_segment>
<parent_path_segment>dp_20200709090613_hie006_imp1\\conditions\\condition2</parent_path_segment>
<value>LUNGOR</value>
</node>

</branch>
</tree>

`;

export { xmlData };
