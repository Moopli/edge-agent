/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

<template>
  <div class="content">
    <mediator v-if="!isMediatorRegistered" title="Please, set up a mediator to proceed with this page!"/>
    <div class="md-layout" v-if="isMediatorRegistered">
      <div class="md-layout-item">
        <div class="md-layout-item">
          <public-invitation/>
        </div>
        <div class="md-layout-item">
          <receive-invitation title="Have an invitation? Put it below and hit the Connect button." type="base64"/>
        </div>
      </div>
      <div class="md-layout-item">
        <div class="md-layout-item" v-if="pendingConnectionsCount">
          <connections title="Pending requests" :count="pendingConnectionsCount" :connections="pendingConnections"/>
        </div>
        <div class="md-layout-item" v-if="completedConnectionsCount">
          <connections title="List of agents you have a connection with" :connections="completedConnections"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {Mediator, PublicInvitation, ReceiveInvitation, Connections} from "@/components";

export default {
  components: {Mediator, PublicInvitation, ReceiveInvitation, Connections},
  methods: mapActions(['queryConnections']),
  computed: mapGetters([
    'pendingConnections', 'completedConnections',
    'pendingConnectionsCount', 'completedConnectionsCount',
    'isMediatorRegistered'
  ]),
  mounted() {
    // refreshes connections when component is mounted
    this.queryConnections()
  }
}
</script>