export class QubicDefinitions {
    public static SIGNATURE_LENGTH = 64;
    public static PUBLIC_KEY_LENGTH = 32;
    public static MAX_TRANSACTION_SIZE = 1024;
    public static DIGEST_LENGTH = 32;
    public static SPECTRUM_DEPTH = 24;
    public static NUMBER_OF_TRANSACTIONS_PER_TICK = 1024;
    public static MAX_NUMBER_OF_CONTRACTS = 1024;
    public static EMPTY_ADDRESS = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    public static QX_ADDRESS = "BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARMID";
    public static ARBITRATOR = "AFZPUAIYVPNUYGJRQVLUKOPPVLHAZQTGLYAAUUNBXFTVTAMSBKQBLEIEPCVJ";
    public static QX_TRANSFER_ASSET_FEE = 1000000; // 1m Qubic's
    public static QX_ISSUE_ASSET_FEE = 1000000000; // 1b Qubic's
    public static QX_ISSUE_ASSET_INPUT_TYPE = 1; // input type for a tx to issue an asset
    public static QX_TRANSFER_ASSET_INPUT_TYPE = 2; // input type for a tx to transfer an asset
}
