// Copyright SecureKey Technologies Inc. All Rights Reserved.
//
// SPDX-License-Identifier: Apache-2.0

module github.com/trustbloc/edge-agent/cmd/trustbloc-agent-js-worker

go 1.13

require (
	github.com/google/uuid v1.1.1
	github.com/mitchellh/mapstructure v1.1.2
	github.com/stretchr/testify v1.5.1
	github.com/trustbloc/edge-agent v0.0.0
	github.com/trustbloc/edge-core v0.1.4-0.20200709143857-e104bb29f6c6
)

replace github.com/trustbloc/edge-agent => ../../
