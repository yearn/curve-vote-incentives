export const voteSourceABI = [
	{
		constant: true,
		inputs: [],
		name: 'hasInitialized',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'minTime',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{name: '_script', type: 'bytes'}],
		name: 'getEVMScriptExecutor',
		outputs: [{name: '', type: 'address'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{name: '_sender', type: 'address'}],
		name: 'canCreateNewVote',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'getRecoveryVault',
		outputs: [{name: '', type: 'address'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'MODIFY_QUORUM_ROLE',
		outputs: [{name: '', type: 'bytes32'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{name: '_voteId', type: 'uint256'},
			{name: '_voter', type: 'address'}
		],
		name: 'getVoterState',
		outputs: [{name: '', type: 'uint8'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{name: '_voteId', type: 'uint256'}],
		name: 'getVote',
		outputs: [
			{name: 'open', type: 'bool'},
			{name: 'executed', type: 'bool'},
			{name: 'startDate', type: 'uint64'},
			{name: 'snapshotBlock', type: 'uint64'},
			{name: 'supportRequired', type: 'uint64'},
			{name: 'minAcceptQuorum', type: 'uint64'},
			{name: 'yea', type: 'uint256'},
			{name: 'nay', type: 'uint256'},
			{name: 'votingPower', type: 'uint256'},
			{name: 'script', type: 'bytes'}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{name: '_minAcceptQuorumPct', type: 'uint64'}],
		name: 'changeMinAcceptQuorumPct',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'MODIFY_SUPPORT_ROLE',
		outputs: [{name: '', type: 'bytes32'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{name: '', type: 'address'}],
		name: 'lastCreateVoteTimes',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{name: '_supportRequiredPct', type: 'uint64'}],
		name: 'changeSupportRequiredPct',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{name: 'token', type: 'address'}],
		name: 'allowRecoverability',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'appId',
		outputs: [{name: '', type: 'bytes32'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'ENABLE_VOTE_CREATION',
		outputs: [{name: '', type: 'bytes32'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'getInitializationBlock',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'minBalanceUpperLimit',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{name: '_minTime', type: 'uint256'}],
		name: 'setMinTime',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{name: '_token', type: 'address'}],
		name: 'transferToVault',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{name: '_sender', type: 'address'},
			{name: '_role', type: 'bytes32'},
			{name: '_params', type: 'uint256[]'}
		],
		name: 'canPerform',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'getEVMScriptRegistry',
		outputs: [{name: '', type: 'address'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{name: '_token', type: 'address'},
			{name: '_supportRequiredPct', type: 'uint64'},
			{name: '_minAcceptQuorumPct', type: 'uint64'},
			{name: '_voteTime', type: 'uint64'},
			{name: '_minBalance', type: 'uint256'},
			{name: '_minTime', type: 'uint256'},
			{name: '_minBalanceLowerLimit', type: 'uint256'},
			{name: '_minBalanceUpperLimit', type: 'uint256'},
			{name: '_minTimeLowerLimit', type: 'uint256'},
			{name: '_minTimeUpperLimit', type: 'uint256'}
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'SET_MIN_BALANCE_ROLE',
		outputs: [{name: '', type: 'bytes32'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'minTimeLowerLimit',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'voteTime',
		outputs: [{name: '', type: 'uint64'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'CREATE_VOTES_ROLE',
		outputs: [{name: '', type: 'bytes32'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{name: '_sender', type: 'address'},
			{name: '', type: 'bytes'}
		],
		name: 'canForward',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'SET_MIN_TIME_ROLE',
		outputs: [{name: '', type: 'bytes32'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'minBalance',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{name: '_minBalance', type: 'uint256'}],
		name: 'setMinBalance',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{name: '_voteId', type: 'uint256'}],
		name: 'canExecute',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{name: '_voteId', type: 'uint256'},
			{name: '_voter', type: 'address'}
		],
		name: 'canVote',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'kernel',
		outputs: [{name: '', type: 'address'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{name: '_executionScript', type: 'bytes'},
			{name: '_metadata', type: 'string'}
		],
		name: 'newVote',
		outputs: [{name: 'voteId', type: 'uint256'}],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{name: '_evmScript', type: 'bytes'}],
		name: 'forward',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [],
		name: 'disableVoteCreationOnce',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'minAcceptQuorumPct',
		outputs: [{name: '', type: 'uint64'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'isPetrified',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'votesLength',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{name: '_voteId', type: 'uint256'},
			{name: '_supports', type: 'bool'},
			{name: '_executesIfDecided', type: 'bool'}
		],
		name: 'vote',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [],
		name: 'enableVoteCreationOnce',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'minTimeUpperLimit',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'minBalanceLowerLimit',
		outputs: [{name: '', type: 'uint256'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'enableVoteCreation',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{name: '_executionScript', type: 'bytes'},
			{name: '_metadata', type: 'string'},
			{name: '_castVote', type: 'bool'},
			{name: '_executesIfDecided', type: 'bool'}
		],
		name: 'newVote',
		outputs: [{name: 'voteId', type: 'uint256'}],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{name: '_voteId', type: 'uint256'}],
		name: 'executeVote',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'supportRequiredPct',
		outputs: [{name: '', type: 'uint64'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'token',
		outputs: [{name: '', type: 'address'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'PCT_BASE',
		outputs: [{name: '', type: 'uint64'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'isForwarder',
		outputs: [{name: '', type: 'bool'}],
		payable: false,
		stateMutability: 'pure',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'DISABLE_VOTE_CREATION',
		outputs: [{name: '', type: 'bytes32'}],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{indexed: true, name: 'voteId', type: 'uint256'},
			{indexed: true, name: 'creator', type: 'address'},
			{indexed: false, name: 'metadata', type: 'string'},
			{indexed: false, name: 'minBalance', type: 'uint256'},
			{indexed: false, name: 'minTime', type: 'uint256'},
			{indexed: false, name: 'totalSupply', type: 'uint256'},
			{indexed: false, name: 'creatorVotingPower', type: 'uint256'}
		],
		name: 'StartVote',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{indexed: true, name: 'voteId', type: 'uint256'},
			{indexed: true, name: 'voter', type: 'address'},
			{indexed: false, name: 'supports', type: 'bool'},
			{indexed: false, name: 'stake', type: 'uint256'}
		],
		name: 'CastVote',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [{indexed: true, name: 'voteId', type: 'uint256'}],
		name: 'ExecuteVote',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [{indexed: false, name: 'supportRequiredPct', type: 'uint64'}],
		name: 'ChangeSupportRequired',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [{indexed: false, name: 'minAcceptQuorumPct', type: 'uint64'}],
		name: 'ChangeMinQuorum',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [{indexed: false, name: 'minBalance', type: 'uint256'}],
		name: 'MinimumBalanceSet',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [{indexed: false, name: 'minTime', type: 'uint256'}],
		name: 'MinimumTimeSet',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{indexed: true, name: 'executor', type: 'address'},
			{indexed: false, name: 'script', type: 'bytes'},
			{indexed: false, name: 'input', type: 'bytes'},
			{indexed: false, name: 'returnData', type: 'bytes'}
		],
		name: 'ScriptResult',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{indexed: true, name: 'vault', type: 'address'},
			{indexed: true, name: 'token', type: 'address'},
			{indexed: false, name: 'amount', type: 'uint256'}
		],
		name: 'RecoverToVault',
		type: 'event'
	}
];
