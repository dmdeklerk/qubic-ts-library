"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QubicDefinitions = void 0;
class QubicDefinitions {
}
exports.QubicDefinitions = QubicDefinitions;
QubicDefinitions.SIGNATURE_LENGTH = 64;
QubicDefinitions.PUBLIC_KEY_LENGTH = 32;
QubicDefinitions.MAX_TRANSACTION_SIZE = 1024;
QubicDefinitions.DIGEST_LENGTH = 32;
QubicDefinitions.SPECTRUM_DEPTH = 24;
QubicDefinitions.NUMBER_OF_TRANSACTIONS_PER_TICK = 1024;
QubicDefinitions.MAX_NUMBER_OF_CONTRACTS = 1024;
QubicDefinitions.EMPTY_ADDRESS = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
QubicDefinitions.QX_ADDRESS = "BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARMID";
QubicDefinitions.ARBITRATOR = "AFZPUAIYVPNUYGJRQVLUKOPPVLHAZQTGLYAAUUNBXFTVTAMSBKQBLEIEPCVJ";
QubicDefinitions.QX_TRANSFER_ASSET_FEE = 1000000; // 1m Qubic's
QubicDefinitions.QX_ISSUE_ASSET_FEE = 1000000000; // 1b Qubic's
QubicDefinitions.QX_ISSUE_ASSET_INPUT_TYPE = 1; // input type for a tx to issue an asset
QubicDefinitions.QX_TRANSFER_ASSET_INPUT_TYPE = 2; // input type for a tx to transfer an asset
/* QUTIL SC */
QubicDefinitions.QUTIL_ADDRESS = "EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVWRF";
QubicDefinitions.QUTIL_SENDMANY_INPUT_TYPE = 1; // input type for send many on Qutil
QubicDefinitions.QUTIL_SENDMANY_FEE = 10; // fee in qubics for send many
