import React from 'react';

// General react-nantive imports
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  Text
} from 'react-native';

// Icons import
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  LineChart,
} from "react-native-chart-kit";
import { Dropdown } from 'react-native-material-dropdown';
import Modal from "react-native-modal";
import Slider from '@react-native-community/slider';


// Styles import
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { WebView } from 'react-native-webview';


class PlannerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSliceIndex: 0,
      selectedPlan: null,
      currentUserId: '306d5121-241b-4bf4-ab8f-21d99c36ff23', 
      scanModalVisible: false,
      users: { "status": "OK", "output": [{ "state": { "data": { "name": "Lung", "type": "Patient", "parties": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }], "node": "HUS", "linearId": { "externalId": null, "id": "425f7f93-8f1a-4947-8ff6-ad586c63491e" }, "participants": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "HG9RsezrYkP6aPE1vZYMMLfSW8mShWVBfYwXjnrgus6W", "index": 0 } }, { "state": { "data": { "name": "Paul", "type": "Doctor", "parties": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }], "node": "HUS", "linearId": { "externalId": null, "id": "9db8178b-1a58-40c0-9e41-e03406f14d7e" }, "participants": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "2YwM4zX8qC58uoeF9Vm1NhVTjLXUpNTL2W9ArCkstrwp", "index": 0 } }, { "state": { "data": { "name": "Tony", "type": "Doctor", "parties": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }], "node": "HUS", "linearId": { "externalId": null, "id": "5979335f-c0e9-44ee-9370-245800dbd6f6" }, "participants": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "F1Ps6YYHuzZYMwfF9MKvrbR2wciapRhpoida4595EeRG", "index": 0 } }, { "state": { "data": { "name": "Alex", "type": "Physicist", "parties": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }], "node": "HUS", "linearId": { "externalId": null, "id": "6a51fbdd-4fb1-490c-beab-6e5a794a029a" }, "participants": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "8i9iJSxmmrjdtBQwJoCrDhYdUYu2wMNRt8oUdcHc4KaC", "index": 0 } }, { "state": { "data": { "name": "John", "type": "Planner", "parties": [{ "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }, { "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }], "node": "Terveystalo", "linearId": { "externalId": null, "id": "2eaa269d-0fc5-4cb7-96b4-4cabc2d2a659" }, "participants": [{ "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }, { "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "4a9gdsVYpQmof4s2osp1tFpZYk16z71a9xjMDr5BVGtD", "index": 0 } }] },
      patients: [],
      latestPlans: [],
      selectedPlanObj: null,
      rejectDialogOpen: false,
      selectedPlan: null,
      latestPresc: [],
      users: [],
    }
  }
  static navigationOptions = {
    title: 'Dashboard',
    header: null,
  };
  componentDidMount() {
    this.getUsers();
    // this.getPlanData();
    this.getPlans();
    this.getPrescriptions()

  }
  getUsers = () => {
    fetch('http://de3791f7.ngrok.io/get-users')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        // let users = responseJson.output;
        // users = users.filter(u => u.state.data.type === 'Patient');
        // //console.log(users);
        this.setState({
          users: responseJson.output,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getPlans = () => {
    fetch('http://de3791f7.ngrok.io/get-treatment-plans')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        let plans = responseJson.latest.map(lp => {
          let obj = lp;
          try {
            obj.state.data.treatmentPlanData = JSON.parse(lp.state.data.treatmentPlanData)
          } catch (e) {
            console.log(e);
          }

          return obj;
        })
        console.log(plans);
        if (plans.length > 0) {
            this.setState({
              latestPlans: plans,
              selectedPlanObj: plans[0],
              selectedPlan: plans[0].state.data.treatmentPlanData.Id
            })
          }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  openPlanner = () => {
    console.log('Opennign planner');
    console.log(this.props.navigation);
    this.props.navigation.navigate('PlannerView');
  }
  getPrescriptions = () => {
    fetch('http://de3791f7.ngrok.io/get-prescriptions')
      .then((response) => response.json())
      .then((responseJson) => {

        console.log('getPrescriptions', responseJson)
        // let plans = responseJson.latest.map(lp => {
        //   let obj = lp;
        //   obj.state.data.treatmentPlanData = JSON.parse(lp.state.data.treatmentPlanData)
        //   return obj;
        // })
        this.setState({
          latestPresc: responseJson.latest,
          // selectedPlanObj: plans[0],
          // selectedPlan: plans[0].state.data.treatmentPlanData.Id
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  createPlan = () => {
    let doctorObj = {};
    let phyObj = {};
    
    this.state.users.filter(u => u.state.data.type == 'Doctor').map(u => {
      let key = u.state.data.linearId.id;
      console.log(key)
      doctorObj[key] = u.state.data.node;
      return u;
    });
    this.state.users.filter(u => u.state.data.type == 'Physicist').map(u => {
      let key = u.state.data.linearId.id;
      console.log(key)
      phyObj[key] = u.state.data.node;
      return u;
    });
    console.log(JSON.stringify({
      proposedBy: this.state.currentUserId,
      treatmentPlanData: '',
      proposedDoctors: JSON.stringify(doctorObj),
      proposedPhysicist: JSON.stringify(phyObj),
      notes: ''
    }))
    fetch('http://be27d3af.ngrok.io/propose-tp', {
      method: 'POST',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        proposedBy: this.state.currentUserId,
        treatmentPlanData: '',
        proposedDoctors: JSON.stringify(doctorObj),
        proposedPhysicist: JSON.stringify(phyObj),
        notes: 'Max'
      }),
    })
    .then(r => {
      console.log(r);
      this.getPlans();
    })
    .catch((error) => {
      console.error(error);
    });;
  }
  openDoctor = () => {
    console.log('Opennign planner');
    console.log(this.props.navigation);
    this.props.navigation.navigate('DashboardView');
  }
  openPhy = () => {
    console.log('Opennign planner');
    console.log(this.props.navigation);
    this.props.navigation.navigate('PhyView');
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log('This state', this.state);
    return (
      <View style={styles.topLevelContainer}>
        <View style={styles.topNavigationContainer}>
          <Image
            style={styles.topNavigationLogo}
            source={require('../../images/varian_logo_transparent.png')}
          />
          <View>

            <Image
              style={styles.topNavigationAvatar}
              source={require('../../images/avatar.png')}
            />
            <Text style={{ marginTop: 10 }}>Planner</Text>
          </View>
        </View>
        <View style={styles.sideNavigationContainer}>
          {1 == 1 && <View>
            <TouchableOpacity style={[styles.menuItemContainer]}
            onPress={this.openDoctor}>
              <MaterialIcon name="person" size={30} color="#777" style={styles.menuItem} />
              <Text style={styles.menuItemText}>Doctor</Text>
            </TouchableOpacity>
            <View style={[styles.menuItemContainer, {
              borderLeftWidth: 6,
              borderLeftColor: '#03a9f4',
              width: 120
            }]}>
              <MaterialIcon name="person" size={30} color="#03a9f4" style={styles.menuItem} />
              <Text style={styles.menuItemTextSelected}>Planner</Text>
            </View>
            <TouchableOpacity style={[styles.menuItemContainer]}
              onPress={this.openPhy}
            >
              <MaterialIcon name="person" size={30} color="#777" style={styles.menuItem} />
              <Text style={styles.menuItemText}>Physicist</Text>
            </TouchableOpacity>       
          </View>}
        </View>

        <View style={styles.mainContainer}>
          <ScrollView style={styles.sidePlaceholderContainer} stickyHeaderIndices={[0]} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={[styles.blockHeaderContainerPatients,]}>
              <Text style={styles.blockHeader}>Prescriptions</Text>
            </View>
            {this.state.latestPresc.length > 0 ? this.state.latestPresc.map((p, index) =>
              <TouchableOpacity style={[styles.patientItemContainer, p.state.data.name === 'Lung' ? styles.patientItemContainerSelected : {}]} >
                <View style={styles.planInformation}>
                  <Text style={styles.patientNameText}>Prescription {index + 1}</Text>
                </View>
              </TouchableOpacity>
            ) :
              <Text>
                No prescriptions
            </Text>
            }
            <View style={[styles.blockHeaderContainerPatients,]}>
              <Text style={styles.blockHeader}>Plans</Text>
            </View>
            {this.state.latestPlans.length > 0 ? this.state.latestPlans.map((p, index) =>
              <TouchableOpacity style={[styles.patientItemContainer, p.state.data.name === 'Lung' ? styles.patientItemContainerSelected : {}]} >
                <View style={styles.planInformation}>
                  <Text style={styles.patientNameText}>{p.state.data.treatmentPlanData.Id}</Text>
                  <View style={[styles.badgeNew, {
                    backgroundColor: p.state.data.status == 'APPROVED' ? 'green' : '#03a9f4',
                  
                  }]}>
                    <Text style={styles.badgeNewText}>{p.state.data.status}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ) :
              <Text>
                No plans
            </Text>
            }
          </ScrollView>
          <View>
            <ScrollView style={styles.mainPlaceholderContainer}>
              <View style={styles.blockHeaderContainer}>
                <Text style={[styles.blockHeader, { marginLeft: 30 }]}>Plan rescription</Text>
              </View>
              <Text style={styles.prescText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu. Curabitur vitae nunc sed velit dignissim sodales ut eu. Ut morbi tincidunt augue interdum velit euismod. Felis eget nunc lobortis mattis aliquam. Libero id faucibus nisl tincidunt eget nullam non nisi. In pellentesque massa placerat duis. Euismod quis viverra nibh cras. Dis parturient montes nascetur ridiculus. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Quis eleifend quam adipiscing vitae proin sagittis. Duis at tellus at urna condimentum mattis pellentesque. Quis eleifend quam adipiscing vitae. Suscipit tellus mauris a diam maecenas sed enim ut. Id ornare arcu odio ut sem nulla pharetra.
              </Text>


            </ScrollView>

            <View style={styles.planReviewBottomContainer}>
              {/* <TouchableOpacity onPress={() => this.setState({ rejectDialogOpen: true })} style={styles.planReviewBottomRejectContainer}>
                <Text style={styles.planReviewBottomRejectText}>Reject</Text>
              </TouchableOpacity> */}
              <View style={{ width: 250, marginRight: 30 }}>
                <Dropdown
                  label='Select Doctors'
                  value={this.state.users.filter(u => u.state.data.type == 'Doctor').map(u => u.state.data.name)}
                  onChangeText={(p, index, data) => {
                    this.setState({ selectedPlan: p, selectedPlanObj: this.state.latestPlans[index] })
                  }}
                  data={this.state.users.filter(u => u.state.data.type == 'Doctor').map(u => {
                    let value = {
                      value: u.state.data.name
                    };
                    return value;
                  })}
                />
              </View>
              <View style={{ width: 250, marginRight: 30 }}>
                <Dropdown
                  label='Select Physicists'
                  value={this.state.users.filter(u => u.state.data.type == 'Physicist').map(u => u.state.data.name)}
                  onChangeText={(p, index, data) => {
                    this.setState({ selectedPlan: p, selectedPlanObj: this.state.latestPlans[index] })
                  }}
                  data={this.state.users.filter(u => u.state.data.type == 'Physicist').map(u => {
                    let value = {
                      value: u.state.data.name

                    };
                    return value;
                  })}
                />
              </View>
              {/* <Dropdown
                label='Select Physicists'
                value={this.state.selectedPlan !== null ? this.state.selectedPlan : ''}
                onChangeText={(p, index, data) => {
                  this.setState({ selectedPlan: p, selectedPlanObj: this.state.latestPlans[index] })
                }}
                data={this.state.latestPlans.map(lp => {
                  let value = {
                    value: lp.state.data.treatmentPlanData.Id

                  };
                  return value;
                })}
              /> */}
              <TouchableOpacity style={styles.planReviewBottomApproveContainer} onPress={this.createPlan}>
                <Text style={styles.planReviewBottomApproveText}>Create Plan</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
        <Modal
          isVisible={this.state.scanModalVisible}
          onBackdropPress={() => this.setState({ scanModalVisible: false })}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
        >
          <View style={styles.modalMainContainer}>
            <ScrollView pinchGestureEnabled scrollEnabled={false}>
              {this.state.selectedPlanObj !== null && <Image
                style={styles.scanImageModalSized}
                source={{ uri: `https://junction-planreview.azurewebsites.net/${this.state.selectedPlanObj.state.data.treatmentPlanData.RenderedBitmaps[this.state.currentSliceIndex].Href}` }}
              />}
            </ScrollView>
            {this.state.selectedPlanObj !== null && <Slider
              style={styles.scanImageModalSlider}
              minimumValue={0}
              step={1}
              onValueChange={val => this.setState({ currentSliceIndex: val })}
              maximumValue={this.state.selectedPlanObj.state.data.treatmentPlanData.RenderedBitmaps.length - 1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />}
          </View>
        </Modal>
        <Modal
          isVisible={this.state.rejectDialogOpen}
          onBackdropPress={() => this.setState({ rejectDialogOpen: false })}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          style={styles.rejectmodalContainer}
        >
          <View style={styles.rejectionModalSubContainer}>
            <Text style={styles.notesTextHeader}  >Rejection Notes</Text>
            <TextInput
              style={styles.notesTextField}
              multiline
            />
            <View style={styles.sendButtonContainer}>
              <Text style={styles.sendButtonText}>Send</Text>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

export default PlannerView;