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


class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSliceIndex: 0,
      selectedPlan: null,
      scanModalVisible: false,
      users: { "status": "OK", "output": [{ "state": { "data": { "name": "Lung", "type": "Patient", "parties": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }], "node": "HUS", "linearId": { "externalId": null, "id": "425f7f93-8f1a-4947-8ff6-ad586c63491e" }, "participants": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "HG9RsezrYkP6aPE1vZYMMLfSW8mShWVBfYwXjnrgus6W", "index": 0 } }, { "state": { "data": { "name": "Paul", "type": "Doctor", "parties": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }], "node": "HUS", "linearId": { "externalId": null, "id": "9db8178b-1a58-40c0-9e41-e03406f14d7e" }, "participants": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "2YwM4zX8qC58uoeF9Vm1NhVTjLXUpNTL2W9ArCkstrwp", "index": 0 } }, { "state": { "data": { "name": "Tony", "type": "Doctor", "parties": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }], "node": "HUS", "linearId": { "externalId": null, "id": "5979335f-c0e9-44ee-9370-245800dbd6f6" }, "participants": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "F1Ps6YYHuzZYMwfF9MKvrbR2wciapRhpoida4595EeRG", "index": 0 } }, { "state": { "data": { "name": "Alex", "type": "Physicist", "parties": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }], "node": "HUS", "linearId": { "externalId": null, "id": "6a51fbdd-4fb1-490c-beab-6e5a794a029a" }, "participants": [{ "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }, { "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "8i9iJSxmmrjdtBQwJoCrDhYdUYu2wMNRt8oUdcHc4KaC", "index": 0 } }, { "state": { "data": { "name": "John", "type": "Planner", "parties": [{ "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }, { "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }], "node": "Terveystalo", "linearId": { "externalId": null, "id": "2eaa269d-0fc5-4cb7-96b4-4cabc2d2a659" }, "participants": [{ "name": "O=Terveystalo, L=Turku, C=FI", "owningKey": "GfHq2tTVk9z4eXgyFTtwENncbeQybCDXZoDzbmBAmU8WbCvRqqwcWsTrAE6K" }, { "name": "O=HUS, L=Helsinki, C=FI", "owningKey": "GfHq2tTVk9z4eXgyTkpXPuZWRMdJYmfcpJyNmBfM6rnkvzq1oqiU91Mtfd25" }] }, "contract": "com.varian.contracts.UserContract", "notary": { "name": "O=Notary Service, L=Zurich, C=CH", "owningKey": "GfHq2tTVk9z4eXgyRBfPQWcfxVVWzRtmkguf5s3Qr47Zc54XRKXZVDxY2nya" }, "encumbrance": null, "constraint": { "attachmentId": "Hw95wXaGL17J34ZKfQekCTa66HGS3ftCqaEZs6zZdYni" } }, "ref": { "txhash": "4a9gdsVYpQmof4s2osp1tFpZYk16z71a9xjMDr5BVGtD", "index": 0 } }] },
      patients: [],
      latestPlans: [],
      selectedPlanObj: null,
      rejectDialogOpen: false,
      selectedPlan: null,
      selectedIndex: 0,
      doctors: [],
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

  }
  getUsers = () => {
    fetch('http://de3791f7.ngrok.io/get-users')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        let users = responseJson.output;
        users = users.filter(u => u.state.data.type === 'Patient');
        //console.log(users);
        this.setState({
          patients: users,
          doctors: responseJson.output.filter(u => u.state.data.type == 'Doctor'),
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  acceptPlan = () => {
    fetch('http://de3791f7.ngrok.io/accept-tp', {
      method: 'POST',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planId: this.state.selectedPlanObj.state.data.linearId.id,
        acceptor: this.state.doctors[this.state.selectedIndex].state.data.linearId.id,
        notes: 'Max'
      }),
    })
      .then(r => {
        console.log(r);
        this.getPlans();
        this.forceUpdate();
      })
      .catch((error) => {
        console.error(error);
      });;
  }
  rejectPlan = () => {
    console.log(JSON.stringify({
      proposedPlanId: this.state.selectedPlanObj.state.data.linearId.id,
      updateProposer: {
        [this.state.doctors[this.state.selectedIndex].state.data.linearId.id]: this.state.doctors[this.state.selectedIndex].state.data.node
      },
      updatedTreatmentPlan: JSON.stringify(this.state.selectedPlanObj.state.data.treatmentPlanData),
      notes: 'Important notes'
    }));
    fetch('http://de3791f7.ngrok.io/update-tp', {
      method: 'POST',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        proposedPlanId: this.state.selectedPlanObj.state.data.linearId.id,
        updateProposer: JSON.stringify({
          [this.state.doctors[this.state.selectedIndex].state.data.linearId.id]: this.state.doctors[this.state.selectedIndex].state.data.node
        }),
        updatedTreatmentPlan: JSON.stringify(this.state.selectedPlanObj.state.data.treatmentPlanData),
        notes: 'Important notes'
      }),
    })
      .then(r => {
        console.log(r);
        this.getPlans();
        this.setState({rejectDialogOpen: false})
        this.forceUpdate();
      })
      .catch((error) => {
        console.error(error);
      });;
  }
  getPlanData = () => {
    fetch('https://junction-planreview.azurewebsites.net/api/patients/Lung/plans/JSu-IM102')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
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
          obj.state.data.treatmentPlanData = JSON.parse(lp.state.data.treatmentPlanData)
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
  openPhy = () => {
    console.log('Opennign planner');
    console.log(this.props.navigation);
    this.props.navigation.navigate('PhyView');
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.state);
    return (
      <View style={styles.topLevelContainer}>
        <View style={styles.topNavigationContainer}>
          <Image
            style={styles.topNavigationLogo}
            source={require('../../images/varian_logo_transparent.png')}
          />
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.setState({ selectedIndex: 0 })}>
                <Image
                  style={[styles.topNavigationAvatar, this.state.selectedIndex == 0 ? { borderWidth: 4, borderColor: '#03a9f4' } : {}]}
                  source={require('../../images/avatar.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ selectedIndex: 1 })}>
                <Image
                  style={[styles.topNavigationAvatar, this.state.selectedIndex == 1 ? { borderWidth: 4, borderColor: '#03a9f4' } : {}]}
                  source={require('../../images/avatar.png')}
                />
              </TouchableOpacity>
            </View>
            {this.state.doctors.length > 0 && <Text style={{ marginTop: 3 }}>Doctor ID: {this.state.doctors[this.state.selectedIndex].state.data.linearId.id}</Text>}
          </View>
        </View>
        <View style={styles.sideNavigationContainer}>
          {1 == 1 && <View>
            <View style={[styles.menuItemContainer, {
              borderLeftWidth: 6,
              borderLeftColor: '#03a9f4',
              width: 120
            }]}>
              <MaterialIcon name="person" size={30} color="#03a9f4" style={styles.menuItem} />
              <Text style={styles.menuItemTextSelected}>Doctor</Text>
            </View>
            <TouchableOpacity onPress={() => this.openPlanner()} style={styles.menuItemContainer}>
              <MaterialIcon name="person" size={30} color="#777" style={styles.menuItem} />
              <Text style={styles.menuItemText}>Planner</Text>
            </TouchableOpacity>
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
              <Text style={styles.blockHeader}>Patients</Text>
            </View>
            {this.state.patients.map(p =>
              <TouchableOpacity style={[styles.patientItemContainer, p.state.data.name === 'Lung' ? styles.patientItemContainerSelected : {}]} >
                <View style={styles.planInformation}>
                  <Text style={styles.patientNameText}>{p.state.data.name}</Text>
                  {p.state.data.name === 'Lung' && <View style={styles.badgeNew}>
                    <Text style={styles.badgeNewText}>NEW</Text>
                  </View>}
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>
          <View>
            <ScrollView style={styles.mainPlaceholderContainer}>
              <View style={styles.blockHeaderContainer}>
                <Text style={[styles.blockHeader, { marginLeft: 30 }]}>Plan Information</Text>
              </View>
              <View style={styles.planInformationContainer}>
                <View style={styles.planInformationMainContainer}>
                  <Dropdown
                    label='Select Plan'
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
                  />
                </View>
              </View>

              {/* <WebView
                source={{ uri: 'http://de3791f7.ngrok.io/mesh' }}
                style={{ marginTop: 20, height: 400, width: 800, backgroundColor: 'rgba(0,0,0,0)' }}
              /> */}
              <View style={styles.blockHeaderContainer}>
                <Text style={[styles.blockHeader, { marginLeft: 30 }]}>DVH Graph</Text>
              </View>
              {this.state.selectedPlanObj !== null && <Image
                style={styles.dvhImage}
                source={{ uri: `https://junction-planreview.azurewebsites.net/${this.state.selectedPlanObj.state.data.treatmentPlanData.DvhGraph.Href}` }}
              />}

              <View style={styles.blockHeaderContainer}>
                <Text style={[styles.blockHeader, { marginLeft: 30 }]}>CT Scan</Text>
              </View>
              <TouchableOpacity style={styles.palceholder} onPress={() => this.setState({ scanModalVisible: true })}>
                {this.state.selectedPlanObj !== null && <Image
                  style={styles.scanImage}
                  source={{ uri: `https://junction-planreview.azurewebsites.net/${this.state.selectedPlanObj.state.data.treatmentPlanData.RenderedBitmaps[this.state.currentSliceIndex].Href}` }}
                />}
              </TouchableOpacity>

            </ScrollView>

            <View style={styles.planReviewBottomContainer}>
              <TouchableOpacity onPress={() => this.setState({ rejectDialogOpen: true })} style={styles.planReviewBottomRejectContainer}>
                <Text style={styles.planReviewBottomRejectText}>Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.planReviewBottomApproveContainer} onPress={this.acceptPlan}>
                <Text style={styles.planReviewBottomApproveText}>Approve</Text>
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
            <TouchableOpacity style={styles.sendButtonContainer} onPress={this.rejectPlan}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}

export default DashboardView;