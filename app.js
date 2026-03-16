/**
 * Genius GP Calculator - Complete Implementation with i18n
 */

// ============ Language System ============
const i18n = {
  currentLang: 'zh',

  translations: {
    en: {
      title: "Genius Airdrop GP Calculator",
      howItWorks: "How this works",
      gpValueMatrix: "GP Value Matrix",
      gpValueMatrixDesc: "Shows estimated $/GP across FDV and airdrop allocation scenarios. Click any cell, then enter your GP balance and farming costs for personalized P&L.",
      vestingSimulator: "Vesting Simulator",
      vestingSimulatorDesc: "Models your token unlock timeline with draggable price curves for cliff and linear vesting.",
      volumeOptimizer: "Volume Optimizer",
      volumeOptimizerDesc: "Model your GP share from the fixed weekly pool based on platform volume and community-observed efficiency bands.",
      disclaimer: "Disclaimer: Built by a regular user, not the Genius team. All numbers and interpretations are my own opinion and not financial advice. DYOR.",
      tgBannerText: "Thinking about GP pricing or new crypto tools? Join the 0xtoolsmith Telegram to discuss models, suggest ideas, and collaborate on possible deals.",
      xBannerText: "Explore Web3 Chinese Community · Airdrop Tools · Share & Discuss - Follow @岳来岳会赚",
      season1Ends: "Season 1 ends",
      days: "days",
      weeksLeft: "weeks left",
      gpRemaining: "GP remaining (10M/week)",
      matrixIntro: "Estimate your GP value across FDV scenarios and airdrop allocation bands. Click any cell to lock in a scenario.",
      parameters: "Parameters",
      parametersSub: "Set your inputs, then click a cell in the matrix.",
      season1GpSupply: "Season 1 GP supply",
      yourGpBalance: "Your GP balance",
      farmingCosts: "Farming costs (USD)",
      egGp: "e.g. 1,000",
      totalSpentFarming: "Total spent farming",
      spinWheel: "(Spin Wheel)",
      gpNote: "Base: 200M S1 GP. Toggle extras to add to supply. *Docs previously stated 10M GP, later changed to 50M GP, then 200M.",
      gpValueMatrixTitle: "GP value matrix",
      gpValueMatrixSub: "Price per GP at each FDV × airdrop % scenario",
      clickCellHint: "Click any cell to lock a scenario",
      pnl: "PnL",
      selectCellAbove: "Select a cell above",
      gross: "Gross",
      costs: "Costs",
      showBreakdown: "Show breakdown",
      footnote1: "Hover rows to scan FDV slices. Click to lock a cell and see your PnL.",
      footnote2: "Adjust total GP to reflect final tokenomics.",
      vestingScheduleSimulator: "Vesting Schedule Simulator",
      vestingModelDesc: "Model your token unlock timeline. Defaults based on",
      scenarioInputs: "Scenario inputs",
      fdvAtTge: "FDV at TGE (USD)",
      airdropPct: "Airdrop % of supply (TGE unlock)",
      yourGpBalanceForCalc: "Your GP balance (for value calc)",
      adjustAssumptions: "Adjust assumptions (vesting, cliff)",
      vestingParameters: "Vesting parameters",
      unlockedAtTge: "Unlocked at TGE",
      remainingVestPeriod: "Remaining vest period",
      cliffBeforeVest: "Cliff before vest starts",
      none: "None",
      totalRealized: "Total realized",
      tgeSell: "TGE sell",
      avgMonthlySell: "Avg monthly sell",
      fullyVested: "Fully vested",
      saveScenario: "+ Save Scenario",
      momPriceChange: "MoM price change (drag handles to adjust)",
      reset: "Reset",
      monthlyBreakdown: "Monthly breakdown",
      month: "Month",
      unlockPct: "Unlock %",
      cumPct: "Cum. %",
      priceMult: "Price Mult",
      yziLabsComparables: "YZi Labs-backed comparables",
      volumeOptimizerTitle: "Volume Optimizer",
      voBlurb1: "• Estimates your share of the fixed 10M weekly GP pool",
      voBlurb2: "• Higher multiplier = more GP per dollar. Splitting across accounts can push you into a better band",
      voBlurb3: "• Auto-fills GP pricing from the matrix above",
      voDisclaimer: "Figures are approximate and will be refined as more empirical data becomes available.",
      platformAssumptions: "Platform assumptions",
      assumedPlatformWeeklyVolume: "Assumed platform weekly volume",
      egVolume: "e.g. 500,000,000",
      platformVolNote: "Total volume across all traders on the platform each week. 10M GP is split proportionally among all participants.",
      yourTradingPlan: "Your trading plan",
      yourWeeklyVolume: "Your weekly volume (USD)",
      egUserVolume: "e.g. 100,000",
      numberOfAccounts: "Number of accounts",
      accountsNote: "Volume is split evenly. Smaller per-account volume may land in a more efficient band.",
      accountLevel: "Account level (for fees)",
      levelNote: "Affects fee rate on Major/Alt pairs. Stable/Native pairs are always 0.05%.",
      volumeSplitByPairType: "Volume split by pair type",
      stableStable: "Stable-Stable",
      stableNative: "Stable-Native",
      majorPairs: "Major pairs",
      altLongTail: "Alt / long-tail",
      gpPriceScenario: "GP price scenario",
      clickMatrixCell: "Click a matrix cell or enter manually",
      gpPriceNote: "Auto-fills when you select a cell in the GP Value Matrix above.",
      estWeeklyGp: "Est. weekly GP",
      effCostPerGp: "Eff. cost/GP",
      blendedFeeRate: "Blended fee rate",
      totalFeesPaid: "Total fees paid",
      airdropValue: "Airdrop value",
      netPnl: "Net P&L",
      volumeSplitByCategory: "Volume split by pair category",
      efficiencyBandMultipliers: "Efficiency band multipliers",
      efficiencyNote: "Based on loose user-reported data from community Telegram groups. Will be updated as more data appears over the coming weeks.",
      voFeatDisclaimer: "GP efficiency rates are community estimates, not official figures. Actual GP depends on total platform volume and pro-rata distribution.",
      pairSelectorTba: "Pair Selector (TBA)",
      pairSelectorDesc: "Coming soon - surfaces the best pairs for GP farming based on real-time volume, multipliers, fees, and liquidity routing.",
      joinTgUpdates: "Join Telegram for updates",
      startTrading: "Start trading on Genius here!",
      lastUpdated: "Last updated: Mar 2026. Not financial advice.",
      linkCopied: "Link copied to clipboard",
      atTge: "At TGE",
      originalAuthor: "Original by",
      chineseBy: "Chinese by",
      // Vest ref cards
      opnDesc: "Open Network · 1B supply",
      opnSummary: "Airdrop 23.5% · 15% TGE · 7mo vest",
      asterDesc: "Aster DEX · 8B supply · YZi Labs-backed",
      asterSummary: "Airdrop 53.5% · 8.8% TGE · 80mo vest",
      refAirdrop: "Airdrop",
      refInvestors: "Investors",
      refTeam: "Team",
      refFoundation: "Foundation",
      refEcosystem: "Ecosystem",
      refLiquidity: "Liquidity",
      refTgeAirdrop: "TGE Airdrop",
      refRemainingAirdrop: "Remaining Airdrop",
      refTreasury: "Treasury",
      sourceDropstab: "Source: DropsTab",
      sourceAsterDocs: "Source: Aster Docs",
      opnAirdropVal: "23.5% · 15% TGE · 7mo linear",
      opnInvestorsVal: "23% · 12mo cliff · 24mo linear",
      opnTeamVal: "19.5% · 12mo cliff · 24mo linear",
      asterTgeVal: "8.8% · 100% at TGE (704M tokens)",
      asterRemainVal: "44.7% · 80mo linear",
      asterEcoVal: "30% · 20mo linear",
      asterTeamVal: "5% · 12mo cliff · 40mo linear",
      asterTreasuryVal: "7% · Locked"
    },
    zh: {
      title: "Genius 空投 GP 计算器",
      howItWorks: "使用说明",
      gpValueMatrix: "GP 价值矩阵",
      gpValueMatrixDesc: "显示不同 FDV 和空投比例下的预估 $/GP。点击任意单元格，然后输入您的 GP 余额和耕作成本，查看个性化盈亏。",
      vestingSimulator: "解锁模拟器",
      vestingSimulatorDesc: "通过可拖动的价格曲线模拟代币解锁时间表，包括锁仓期和线性解锁。",
      volumeOptimizer: "交易量优化器",
      volumeOptimizerDesc: "基于平台交易量和社区观察到的效率区间，模拟您在每周固定 GP 池中的份额。",
      disclaimer: "免责声明：本工具由普通用户制作，非 Genius 官方团队。所有数字和解读均为个人观点，不构成财务建议。DYOR。",
      tgBannerText: "想讨论 GP 定价或新的加密工具？加入 0xtoolsmith Telegram 讨论模型、提出想法，并探讨合作机会。",
      xBannerText: "探索更多 Web3 中文社区 · 撸毛工具 · 交流分享 - 关注 @岳来岳会赚",
      season1Ends: "第一季结束",
      days: "天",
      weeksLeft: "周剩余",
      gpRemaining: "GP 剩余 (每周1000万)",
      matrixIntro: "估算不同 FDV 场景和空投比例下的 GP 价值。点击任意单元格锁定场景。",
      parameters: "参数设置",
      parametersSub: "设置您的输入，然后点击矩阵中的单元格。",
      season1GpSupply: "第一季 GP 供应量",
      yourGpBalance: "您的 GP 余额",
      farmingCosts: "耕作成本 (USD)",
      egGp: "例如 1,000",
      totalSpentFarming: "耕作总花费",
      spinWheel: "(转盘)",
      gpNote: "基础：200M S1 GP。切换额外选项以增加供应量。*文档之前显示10M GP，后改为50M GP，再改为200M。",
      gpValueMatrixTitle: "GP 价值矩阵",
      gpValueMatrixSub: "每个 FDV × 空投比例场景下的 GP 单价",
      clickCellHint: "点击任意单元格锁定场景",
      pnl: "盈亏",
      selectCellAbove: "请在上方选择单元格",
      gross: "总价值",
      costs: "成本",
      showBreakdown: "显示详情",
      footnote1: "悬停行可扫描 FDV 切片。点击锁定单元格查看盈亏。",
      footnote2: "调整总 GP 以反映最终代币经济学。",
      vestingScheduleSimulator: "解锁时间表模拟器",
      vestingModelDesc: "模拟您的代币解锁时间表。默认基于",
      scenarioInputs: "场景输入",
      fdvAtTge: "TGE 时 FDV (USD)",
      airdropPct: "空投比例 % (TGE 解锁)",
      yourGpBalanceForCalc: "您的 GP 余额 (用于价值计算)",
      adjustAssumptions: "调整假设 (解锁期、锁仓期)",
      vestingParameters: "解锁参数",
      unlockedAtTge: "TGE 解锁比例",
      remainingVestPeriod: "剩余解锁期",
      cliffBeforeVest: "解锁前锁仓期",
      none: "无",
      totalRealized: "总实现价值",
      tgeSell: "TGE 卖出",
      avgMonthlySell: "平均月度卖出",
      fullyVested: "完全解锁",
      saveScenario: "+ 保存场景",
      momPriceChange: "月度价格变化 (拖动节点调整)",
      reset: "重置",
      monthlyBreakdown: "月度明细",
      month: "月份",
      unlockPct: "解锁 %",
      cumPct: "累计 %",
      priceMult: "价格乘数",
      yziLabsComparables: "YZi Labs 支持的同类项目",
      volumeOptimizerTitle: "交易量优化器",
      voBlurb1: "• 估算您在每周固定 1000 万 GP 池中的份额",
      voBlurb2: "• 更高的乘数 = 每美元更多 GP。分散到多个账户可能进入更高效率区间",
      voBlurb3: "• 自动从上方矩阵填充 GP 价格",
      voDisclaimer: "数据为近似值，将随着更多实证数据的出现而优化。",
      platformAssumptions: "平台假设",
      assumedPlatformWeeklyVolume: "假设平台周交易量",
      egVolume: "例如 500,000,000",
      platformVolNote: "平台所有交易者每周的总交易量。1000 万 GP 按比例分配给所有参与者。",
      yourTradingPlan: "您的交易计划",
      yourWeeklyVolume: "您的周交易量 (USD)",
      egUserVolume: "例如 100,000",
      numberOfAccounts: "账户数量",
      accountsNote: "交易量平均分配。较小的单账户交易量可能落入更高效率区间。",
      accountLevel: "账户等级 (影响费率)",
      levelNote: "影响主流/山寨币对的费率。稳定币/原生币对始终为 0.05%。",
      volumeSplitByPairType: "按交易对类型分配交易量",
      stableStable: "稳定币-稳定币",
      stableNative: "稳定币-原生币",
      majorPairs: "主流币对",
      altLongTail: "山寨币/长尾",
      gpPriceScenario: "GP 价格场景",
      clickMatrixCell: "点击矩阵单元格或手动输入",
      gpPriceNote: "当您在上方 GP 价值矩阵中选择单元格时自动填充。",
      estWeeklyGp: "预估每周 GP",
      effCostPerGp: "有效成本/GP",
      blendedFeeRate: "混合费率",
      totalFeesPaid: "总手续费",
      airdropValue: "空投价值",
      netPnl: "净盈亏",
      volumeSplitByCategory: "按交易对类别分配交易量",
      efficiencyBandMultipliers: "效率区间乘数",
      efficiencyNote: "基于社区 Telegram 群组中松散的用户报告数据。将随着未来几周更多数据的出现而更新。",
      voFeatDisclaimer: "GP 效率率为社区估算，非官方数据。实际 GP 取决于平台总交易量和按比例分配。",
      pairSelectorTba: "交易对选择器 (即将推出)",
      pairSelectorDesc: "即将推出 - 根据实时交易量、乘数、费率和流动性路由，筛选最佳 GP 耕作交易对。",
      joinTgUpdates: "加入 Telegram 获取更新",
      startTrading: "在 Genius 开始交易！",
      lastUpdated: "最后更新：2026年3月。不构成财务建议。",
      linkCopied: "链接已复制到剪贴板",
      atTge: "TGE 时",
      originalAuthor: "原作者",
      chineseBy: "汉化",
      // Vest ref cards
      opnDesc: "Open Network · 10亿供应量",
      opnSummary: "空投 23.5% · 15% TGE · 7个月解锁",
      asterDesc: "Aster DEX · 80亿供应量 · YZi Labs 投资",
      asterSummary: "空投 53.5% · 8.8% TGE · 80个月解锁",
      refAirdrop: "空投",
      refInvestors: "投资者",
      refTeam: "团队",
      refFoundation: "基金会",
      refEcosystem: "生态系统",
      refLiquidity: "流动性",
      refTgeAirdrop: "TGE 空投",
      refRemainingAirdrop: "剩余空投",
      refTreasury: "国库",
      sourceDropstab: "来源: DropsTab",
      sourceAsterDocs: "来源: Aster 文档",
      opnAirdropVal: "23.5% · 15% TGE · 7个月线性",
      opnInvestorsVal: "23% · 12个月锁仓 · 24个月线性",
      opnTeamVal: "19.5% · 12个月锁仓 · 24个月线性",
      asterTgeVal: "8.8% · TGE 100% (7.04亿代币)",
      asterRemainVal: "44.7% · 80个月线性",
      asterEcoVal: "30% · 20个月线性",
      asterTeamVal: "5% · 12个月锁仓 · 40个月线性",
      asterTreasuryVal: "7% · 锁定"
    }
  },

  init() {
    const saved = localStorage.getItem('gp-calc-lang');
    if (saved && this.translations[saved]) {
      this.currentLang = saved;
    }
    this.apply();
    document.getElementById('langBtn').addEventListener('click', () => this.toggle());
  },

  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('gp-calc-lang', this.currentLang);
    this.apply();
  },

  apply() {
    const t = this.translations[this.currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });
    document.getElementById('langBtn').textContent = this.currentLang === 'en' ? 'EN / 中文' : '中文 / EN';
  },

  t(key) {
    return this.translations[this.currentLang][key] || key;
  }
};

// ============ Utility Functions ============
const Utils = {
  formatNumber(num) {
    if (typeof num === 'string') num = this.parseNumber(num);
    return num.toLocaleString('en-US');
  },

  parseNumber(str) {
    if (typeof str === 'number') return str;
    return parseFloat(String(str).replace(/,/g, '')) || 0;
  },

  formatCurrency(num, decimals = 2) {
    if (typeof num === 'string') num = this.parseNumber(num);
    return '$' + num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  },

  formatPercent(num) {
    return (num >= 0 ? '+' : '') + num.toFixed(1) + '%';
  },

  formatCompact(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
  }
};

// ============ Countdown Timer ============
const Countdown = {
  endDate: new Date('2026-04-12T00:00:00Z'),
  weeklyPool: 10000000,

  init() {
    this.update();
    setInterval(() => this.update(), 60000);
  },

  update() {
    const now = new Date();
    const diff = this.endDate - now;

    if (diff <= 0) {
      document.getElementById('cdDays').textContent = '0';
      document.getElementById('cdWeeks').textContent = '0';
      document.getElementById('cdGpRemaining').textContent = '0';
      return;
    }

    const totalDays = Math.ceil(diff / (24 * 60 * 60 * 1000));
    const weeks = Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
    const gpRemaining = weeks * this.weeklyPool;

    document.getElementById('cdDays').textContent = totalDays;
    document.getElementById('cdWeeks').textContent = weeks;
    document.getElementById('cdGpRemaining').textContent = Utils.formatCompact(gpRemaining);
  }
};

// ============ GP Value Matrix ============
const GPMatrix = {
  fdvValues: [100e6, 150e6, 200e6, 250e6, 350e6, 500e6, 750e6, 1e9],
  airdropPcts: [2.5, 5, 7.5, 10, 15, 20],
  selectedFdv: null,
  selectedPct: null,
  baseSupply: 200000000,
  addedSupply: {},

  init() {
    this.bindEvents();
    this.renderMatrix();
  },

  bindEvents() {
    // GP supply toggles
    document.querySelectorAll('[data-gpadd]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const val = parseInt(e.target.closest('[data-gpadd]').dataset.gpadd);
        e.target.closest('.vest-chip').classList.toggle('active');
        if (this.addedSupply[val]) {
          delete this.addedSupply[val];
        } else {
          this.addedSupply[val] = true;
        }
        this.updateSupplyDisplay();
        this.renderMatrix();
        this.updatePnL();
      });
    });

    // Input formatting
    ['totalGp', 'userGp', 'farmingCost'].forEach(id => {
      const el = document.getElementById(id);
      el.addEventListener('input', (e) => {
        const cursorPos = e.target.selectionStart;
        const oldLen = e.target.value.length;
        const val = Utils.parseNumber(e.target.value);
        if (val > 0) {
          e.target.value = Utils.formatNumber(val);
        }
        const newLen = e.target.value.length;
        const newPos = cursorPos + (newLen - oldLen);
        e.target.setSelectionRange(newPos, newPos);

        this.renderMatrix();
        this.updatePnL();
      });
    });

    // Matrix click
    document.getElementById('matrixBody').addEventListener('click', (e) => {
      const cell = e.target.closest('.value-cell');
      if (!cell) return;

      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);

      this.selectCell(row, col);
    });
  },

  updateSupplyDisplay() {
    let total = this.baseSupply;
    Object.keys(this.addedSupply).forEach(k => {
      total += parseInt(k);
    });
    document.getElementById('totalGp').value = Utils.formatNumber(total);
  },

  getSupply() {
    return Utils.parseNumber(document.getElementById('totalGp').value);
  },

  calcGpPrice(fdv, pct) {
    const supply = this.getSupply();
    return (fdv * (pct / 100)) / supply;
  },

  renderMatrix() {
    const tbody = document.getElementById('matrixBody');
    tbody.innerHTML = '';

    this.fdvValues.forEach((fdv, rowIdx) => {
      const tr = document.createElement('tr');
      tr.dataset.row = rowIdx;

      // FDV label
      const labelTd = document.createElement('td');
      labelTd.textContent = Utils.formatCompact(fdv);
      if (this.selectedFdv === rowIdx) {
        labelTd.classList.add('row-label-highlighted');
      }
      tr.appendChild(labelTd);

      // Value cells
      this.airdropPcts.forEach((pct, colIdx) => {
        const td = document.createElement('td');
        td.className = 'value-cell';
        td.dataset.row = rowIdx;
        td.dataset.col = colIdx + 1;

        const gpPrice = this.calcGpPrice(fdv, pct);
        td.textContent = gpPrice.toFixed(3);
        td.dataset.gpPrice = gpPrice;

        if (this.selectedFdv === rowIdx && this.selectedPct === colIdx + 1) {
          td.classList.add('selected');
        }

        // Check negative ROI
        const userGp = Utils.parseNumber(document.getElementById('userGp').value);
        const cost = Utils.parseNumber(document.getElementById('farmingCost').value);
        if (userGp > 0 && cost > 0) {
          const gross = userGp * gpPrice;
          if (gross < cost) {
            td.classList.add('negative-roi');
          }
        }

        // Add hover events
        td.addEventListener('mouseenter', () => {
          if (this.selectedFdv !== null) return; // Don't show hover if cell is selected
          this.showReadout(fdv, pct, gpPrice, false);
        });

        td.addEventListener('mouseleave', () => {
          if (this.selectedFdv !== null) return;
          this.hideReadout();
        });

        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    // Highlight columns
    document.querySelectorAll('#matrixTable th').forEach((th, idx) => {
      if (idx > 0 && this.selectedPct === idx) {
        th.classList.add('col-highlighted');
      } else {
        th.classList.remove('col-highlighted');
      }
    });
  },

  showReadout(fdv, pct, gpPrice, isLocked) {
    const readoutHint = document.getElementById('readoutHint');
    const readoutTitle = document.getElementById('readoutTitle');
    const readoutMetrics = document.getElementById('readoutMetrics');

    readoutHint.style.display = 'none';
    readoutTitle.style.display = '';
    readoutTitle.textContent = `${Utils.formatCompact(fdv)} FDV @ ${pct}% ${i18n.t('airdrop')}`;

    // Build metrics HTML
    let metricsHtml = `<span class="highlight">$${gpPrice.toFixed(4)}/GP</span>`;

    const userGp = Utils.parseNumber(document.getElementById('userGp').value);
    const cost = Utils.parseNumber(document.getElementById('farmingCost').value);

    if (userGp > 0) {
      const gross = userGp * gpPrice;
      metricsHtml += ` · ${i18n.t('airdropValue')}: ${Utils.formatCurrency(gross)}`;

      if (cost > 0) {
        const net = gross - cost;
        const cls = net >= 0 ? 'positive' : 'negative';
        metricsHtml += ` · ${i18n.t('netPnl')}: <span class="${cls}">${Utils.formatCurrency(net)}</span>`;
      }
    }

    if (readoutMetrics) {
      readoutMetrics.innerHTML = metricsHtml;
    }
  },

  hideReadout() {
    const readoutHint = document.getElementById('readoutHint');
    const readoutTitle = document.getElementById('readoutTitle');
    const readoutMetrics = document.getElementById('readoutMetrics');

    readoutHint.style.display = '';
    readoutHint.textContent = i18n.t('clickCellHint');
    readoutTitle.style.display = 'none';
    if (readoutMetrics) {
      readoutMetrics.innerHTML = '';
    }
  },

  selectCell(row, col) {
    this.selectedFdv = row;
    this.selectedPct = col;

    this.renderMatrix();
    this.updatePnL();

    // Update readout
    const fdv = this.fdvValues[row];
    const pct = this.airdropPcts[col - 1];
    const gpPrice = this.calcGpPrice(fdv, pct);

    this.showReadout(fdv, pct, gpPrice, true);

    // Sync to vesting and volume optimizer
    document.getElementById('voGpPrice').value = gpPrice.toFixed(4);
    VolumeOptimizer.calculate();
  },

  updatePnL() {
    if (this.selectedFdv === null) return;

    const userGp = Utils.parseNumber(document.getElementById('userGp').value);
    const cost = Utils.parseNumber(document.getElementById('farmingCost').value);
    const gpPrice = this.calcGpPrice(this.fdvValues[this.selectedFdv], this.airdropPcts[this.selectedPct - 1]);

    const gross = userGp * gpPrice;
    const net = gross - cost;
    const roi = cost > 0 ? ((net / cost) * 100) : 0;

    const evMain = document.getElementById('evMainValue');
    const evMetrics = document.getElementById('evMetrics');
    const evToggle = document.getElementById('evToggle');

    if (userGp > 0) {
      evMain.innerHTML = Utils.formatCurrency(net);
      evMain.className = 'ev-value ' + (net >= 0 ? 'positive' : 'negative');
      evMetrics.style.display = 'flex';
      evToggle.style.display = 'flex';

      document.getElementById('evGross').textContent = Utils.formatCurrency(gross);
      document.getElementById('evCosts').textContent = Utils.formatCurrency(cost);
      document.getElementById('evRoi').textContent = (roi >= 0 ? '+' : '') + roi.toFixed(1) + '%';
      document.getElementById('evRoi').style.color = roi >= 0 ? 'var(--positive)' : 'var(--danger)';

      // Formula
      document.getElementById('evFormula').innerHTML = `
        GP Price = (${Utils.formatCompact(this.fdvValues[this.selectedFdv])} × ${this.airdropPcts[this.selectedPct - 1]}%) / ${Utils.formatNumber(this.getSupply())} GP<br>
        = $${gpPrice.toFixed(4)} per GP<br><br>
        Gross = ${Utils.formatNumber(userGp)} GP × $${gpPrice.toFixed(4)} = ${Utils.formatCurrency(gross)}<br>
        Net = ${Utils.formatCurrency(gross)} - ${Utils.formatCurrency(cost)} = ${Utils.formatCurrency(net)}
      `;

      // Readout metrics
      document.getElementById('readoutMetrics').innerHTML = `
        <span class="highlight">${Utils.formatNumber(userGp)} GP</span> =
        <span class="${net >= 0 ? 'positive' : 'negative'}">${Utils.formatCurrency(net)}</span>
        (<span class="${roi >= 0 ? 'positive' : 'negative'}">${roi >= 0 ? '+' : ''}${roi.toFixed(0)}% ROI</span>)
      `;
    } else {
      evMain.innerHTML = `<span class="ev-placeholder">${i18n.t('selectCellAbove')}</span>`;
      evMain.className = 'ev-value';
      evMetrics.style.display = 'none';
      evToggle.style.display = 'none';
      document.getElementById('readoutMetrics').innerHTML = '';
    }
  }
};

// ============ EV Toggle ============
document.getElementById('evToggle')?.addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('evDetails').classList.toggle('open');
  const span = this.querySelector('span');
  span.textContent = this.classList.contains('open') ? 'Hide breakdown' : i18n.t('showBreakdown');
});

// ============ Adjust Toggle ============
document.getElementById('adjustToggle')?.addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('adjustBody').classList.toggle('open');
});

// ============ Vesting Simulator ============
const VestingSimulator = {
  presets: {
    'aster-s1': { fdv: 5e9, airdrop: 8.8, tge: 100, months: 0, cliff: 0 },
    'opn': { fdv: 350e6, airdrop: 23.5, tge: 15, months: 7, cliff: 0 }
  },
  priceDeltas: [],
  savedScenarios: [],

  init() {
    this.loadPreset('aster-s1');
    this.bindEvents();
  },

  bindEvents() {
    // Presets
    document.querySelectorAll('[data-vpreset]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-vpreset]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.loadPreset(e.target.dataset.vpreset);
      });
    });

    // FDV chips
    document.querySelectorAll('[data-vfdv]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-vfdv]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('vestFdv').value = Utils.formatNumber(parseInt(e.target.dataset.vfdv));
        this.calculate();
      });
    });

    // Airdrop chips
    document.querySelectorAll('[data-vairdrop]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-vairdrop]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('vestAirdropPct').value = e.target.dataset.vairdrop;
        this.calculate();
      });
    });

    // TGE chips
    document.querySelectorAll('[data-vtge]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-vtge]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('vestTgePct').value = e.target.dataset.vtge;
        this.calculate();
      });
    });

    // Months chips
    document.querySelectorAll('[data-vmo]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-vmo]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('vestMonths').value = e.target.dataset.vmo;
        this.initPriceDeltas();
        this.calculate();
      });
    });

    // Cliff chips
    document.querySelectorAll('[data-vcliff]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-vcliff]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('vestCliff').value = e.target.dataset.vcliff;
        this.calculate();
      });
    });

    // Input changes
    ['vestFdv', 'vestAirdropPct', 'vestUserGp', 'vestTgePct', 'vestMonths', 'vestCliff'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculate());
    });

    // Reset prices
    document.getElementById('resetPrices')?.addEventListener('click', () => {
      this.initPriceDeltas();
      this.calculate();
    });

    // Save scenario
    document.getElementById('vestSaveBtn')?.addEventListener('click', () => this.saveScenario());
  },

  loadPreset(name) {
    const p = this.presets[name];
    document.getElementById('vestFdv').value = Utils.formatNumber(p.fdv);
    document.getElementById('vestAirdropPct').value = p.airdrop;
    document.getElementById('vestTgePct').value = p.tge;
    document.getElementById('vestMonths').value = p.months;
    document.getElementById('vestCliff').value = p.cliff;

    // Update chip states
    document.querySelectorAll('[data-vfdv]').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.vfdv) === p.fdv);
    });
    document.querySelectorAll('[data-vairdrop]').forEach(b => {
      b.classList.toggle('active', parseFloat(b.dataset.vairdrop) === p.airdrop);
    });
    document.querySelectorAll('[data-vtge]').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.vtge) === p.tge);
    });
    document.querySelectorAll('[data-vmo]').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.vmo) === p.months);
    });
    document.querySelectorAll('[data-vcliff]').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.vcliff) === p.cliff);
    });

    this.initPriceDeltas();
    this.calculate();
  },

  initPriceDeltas() {
    const months = parseInt(document.getElementById('vestMonths').value) || 0;
    this.priceDeltas = new Array(months + 1).fill(0);
  },

  calculate() {
    const fdv = Utils.parseNumber(document.getElementById('vestFdv').value);
    const airdropPct = parseFloat(document.getElementById('vestAirdropPct').value) || 0;
    const tgePct = parseFloat(document.getElementById('vestTgePct').value) || 100;
    const months = parseInt(document.getElementById('vestMonths').value) || 0;
    const cliff = parseInt(document.getElementById('vestCliff').value) || 0;
    const userGp = Utils.parseNumber(document.getElementById('vestUserGp').value) || 0;
    const supply = GPMatrix.getSupply();

    const gpPrice = (fdv * (airdropPct / 100)) / supply;

    // Ensure priceDeltas array is correct length
    while (this.priceDeltas.length < months + 1) {
      this.priceDeltas.push(0);
    }

    // Calculate vesting schedule
    let totalRealized = 0;
    let priceMult = 1;
    const rows = [];

    for (let m = 0; m <= months; m++) {
      if (m > 0) {
        priceMult *= (1 + (this.priceDeltas[m] || 0) / 100);
      }

      let unlockPct = 0;
      let cumPct = 0;

      if (m === 0) {
        unlockPct = tgePct;
        cumPct = tgePct;
      } else if (m > cliff && months > cliff) {
        unlockPct = (100 - tgePct) / (months - cliff);
        cumPct = tgePct + unlockPct * (m - cliff);
      } else {
        cumPct = tgePct;
      }

      const monthValue = userGp > 0 ? (userGp * (unlockPct / 100) * gpPrice * priceMult) : 0;
      totalRealized += monthValue;

      rows.push({
        month: m,
        unlockPct,
        cumPct,
        priceMult,
        value: monthValue
      });
    }

    // Update KPIs
    const totalGpValue = userGp > 0 ? totalRealized / userGp : gpPrice;
    document.getElementById('vestTotalValue').textContent = userGp > 0 ?
      Utils.formatCurrency(totalRealized) :
      `$${gpPrice.toFixed(3)}/GP`;
    document.getElementById('vestTgeValue').textContent = tgePct + '%';
    document.getElementById('vestMonthlyValue').textContent = months > cliff ?
      ((100 - tgePct) / (months - cliff)).toFixed(1) + '%/mo' : '-';
    document.getElementById('vestFullDate').textContent = months === 0 ?
      i18n.t('atTge') : `+${months} mo`;

    // Render table
    this.renderTable(rows);
    this.renderChart();
  },

  renderTable(rows) {
    const tbody = document.getElementById('vestTableBody');
    const tfoot = document.getElementById('vestTableFoot');
    tbody.innerHTML = '';

    let totalUnlock = 0;
    rows.forEach(r => {
      totalUnlock += r.unlockPct;
      const tr = document.createElement('tr');
      if (r.month === 0) tr.classList.add('vest-tge-row');
      tr.innerHTML = `
        <td>${r.month === 0 ? 'TGE' : 'M' + r.month}</td>
        <td>${r.unlockPct.toFixed(1)}%</td>
        <td>${r.cumPct.toFixed(1)}%</td>
        <td>${r.priceMult.toFixed(3)}x</td>
      `;
      tbody.appendChild(tr);
    });

    const lastRow = rows[rows.length - 1];
    tfoot.innerHTML = `
      <tr>
        <td style="text-align:left">Total</td>
        <td>${totalUnlock.toFixed(0)}%</td>
        <td>100%</td>
        <td>${lastRow ? lastRow.priceMult.toFixed(3) : '1.000'}x</td>
      </tr>
    `;
  },

  renderChart() {
    const svg = document.getElementById('vestChartSvg');
    const months = parseInt(document.getElementById('vestMonths').value) || 0;

    const width = svg.clientWidth || 700;
    const height = 220;
    const pad = { top: 20, right: 20, bottom: 30, left: 42 };
    const chartW = width - pad.left - pad.right;
    const chartH = height - pad.top - pad.bottom;

    let html = '';

    // Grid lines
    for (let i = -50; i <= 50; i += 10) {
      const y = pad.top + chartH * (1 - (i + 50) / 100);
      const opacity = i === 0 ? 0.4 : 0.1;
      const strokeW = i === 0 ? 1.5 : 1;
      const dash = i === 0 ? '4 3' : '';
      html += `<line x1="${pad.left}" x2="${width - pad.right}" y1="${y}" y2="${y}" stroke="rgba(148,163,184,${opacity})" stroke-width="${strokeW}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
      const labelColor = i === 0 ? '#9ca3af' : '#6b7280';
      html += `<text x="${pad.left - 5}" y="${y + 3.5}" text-anchor="end" fill="${labelColor}" font-size="9.5" font-family="-apple-system, system-ui, sans-serif">${i > 0 ? '+' : ''}${i}%</text>`;
    }

    // X-axis labels
    for (let m = 0; m <= months; m++) {
      const x = pad.left + (months > 0 ? (chartW / months) * m : 0);
      html += `<text x="${x}" y="${height - 6}" text-anchor="middle" fill="#6b7280" font-size="9.5">${m === 0 ? 'TGE' : 'M' + m}</text>`;
    }

    // Draw line and points
    const points = [];
    for (let m = 0; m <= months; m++) {
      const x = pad.left + (months > 0 ? (chartW / months) * m : 0);
      const delta = this.priceDeltas[m] || 0;
      const y = pad.top + chartH * (1 - (delta + 50) / 100);
      points.push({ x, y, m, delta });
    }

    if (points.length > 1) {
      let pathD = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        pathD += ` L ${points[i].x} ${points[i].y}`;
      }
      html += `<path d="${pathD}" fill="none" stroke="url(#vestGrad)" stroke-width="2"/>`;
      html += `<defs><linearGradient id="vestGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#22c9c9"/></linearGradient></defs>`;
    }

    // Draggable handles
    points.forEach((p, i) => {
      const opacity = months === 0 ? 0.5 : 1;
      html += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#22c9c9" stroke="rgba(10,10,20,0.7)" stroke-width="1.5" class="vest-chart-handle" data-month="${i}" style="opacity:${opacity};cursor:${months > 0 ? 'ns-resize' : 'default'}"/>`;
    });

    svg.innerHTML = html;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    if (months > 0) {
      this.bindChartDrag(svg, chartH, pad);
    }
  },

  bindChartDrag(svg, chartH, pad) {
    let dragging = null;
    const tooltip = document.getElementById('vestChartTooltip');

    const getY = (e) => {
      const rect = svg.getBoundingClientRect();
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return clientY - rect.top;
    };

    const updateDelta = (e) => {
      if (dragging === null) return;
      const y = getY(e);
      let delta = (1 - (y - pad.top) / chartH) * 100 - 50;
      delta = Math.round(Math.max(-50, Math.min(50, delta)) / 5) * 5;
      this.priceDeltas[dragging] = delta;

      // Update tooltip
      const rect = svg.getBoundingClientRect();
      tooltip.style.display = 'block';
      tooltip.style.left = (e.clientX || e.touches[0].clientX) - rect.left + 10 + 'px';
      tooltip.style.top = (e.clientY || e.touches[0].clientY) - rect.top - 20 + 'px';
      tooltip.textContent = `M${dragging}: ${delta >= 0 ? '+' : ''}${delta}%`;

      this.calculate();
    };

    svg.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('vest-chart-handle')) {
        dragging = parseInt(e.target.dataset.month);
        e.target.classList.add('dragging');
        e.preventDefault();
      }
    });

    svg.addEventListener('mousemove', updateDelta);

    document.addEventListener('mouseup', () => {
      if (dragging !== null) {
        document.querySelectorAll('.vest-chart-handle').forEach(h => h.classList.remove('dragging'));
        dragging = null;
        tooltip.style.display = 'none';
      }
    });

    // Touch support
    svg.addEventListener('touchstart', (e) => {
      if (e.target.classList.contains('vest-chart-handle')) {
        dragging = parseInt(e.target.dataset.month);
        e.target.classList.add('dragging');
      }
    }, { passive: true });

    svg.addEventListener('touchmove', (e) => {
      if (dragging !== null) {
        updateDelta(e);
      }
    }, { passive: true });

    svg.addEventListener('touchend', () => {
      if (dragging !== null) {
        document.querySelectorAll('.vest-chart-handle').forEach(h => h.classList.remove('dragging'));
        dragging = null;
        tooltip.style.display = 'none';
      }
    });
  },

  saveScenario() {
    if (this.savedScenarios.length >= 3) {
      showToast('Max 3 scenarios');
      return;
    }
    const fdv = document.getElementById('vestFdv').value;
    const airdrop = document.getElementById('vestAirdropPct').value;
    this.savedScenarios.push({ fdv, airdrop, id: Date.now() });
    this.renderSavedScenarios();
    showToast('Scenario saved');
  },

  renderSavedScenarios() {
    const container = document.getElementById('vestSavedList');
    container.innerHTML = this.savedScenarios.map(s => `
      <div class="vest-saved-row">
        <span class="vest-saved-row-label">S${this.savedScenarios.indexOf(s) + 1}</span>
        <span class="vest-saved-row-meta">${s.fdv} @ ${s.airdrop}%</span>
        <div class="vest-saved-row-actions">
          <button class="vest-saved-load" data-id="${s.id}">Load</button>
          <button class="vest-saved-del" data-id="${s.id}">Del</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.vest-saved-load').forEach(btn => {
      btn.addEventListener('click', () => {
        const s = this.savedScenarios.find(x => x.id === parseInt(btn.dataset.id));
        if (s) {
          document.getElementById('vestFdv').value = s.fdv;
          document.getElementById('vestAirdropPct').value = s.airdrop;
          this.calculate();
        }
      });
    });

    container.querySelectorAll('.vest-saved-del').forEach(btn => {
      btn.addEventListener('click', () => {
        this.savedScenarios = this.savedScenarios.filter(x => x.id !== parseInt(btn.dataset.id));
        this.renderSavedScenarios();
      });
    });
  }
};

// ============ Volume Optimizer ============
const VolumeOptimizer = {
  feeRates: { 1: 0.30, 2: 0.20, 3: 0.10, 4: 0.05 },
  stableFee: 0.05,
  weeklyPool: 10000000,
  gpMult: [0.5, 0.5, 1, 1], // Stable-Stable, Stable-Native = 0.5x; Major, Alt = 1.0x
  bands: [
    { max: 100000, mult: 1.3, color: 'rgba(34,201,201,0.5)', label: 'Under $100K' },
    { max: 500000, mult: 1.0, color: 'rgba(251,191,36,0.45)', label: '$100K - $500K' },
    { max: Infinity, mult: 0.75, color: 'rgba(249,115,115,0.45)', label: '$500K+' }
  ],
  splitColors: [
    'rgba(34,201,201,0.5)',
    'rgba(168,85,247,0.5)',
    'rgba(251,191,36,0.5)',
    'rgba(249,115,115,0.5)'
  ],

  init() {
    this.bindEvents();
    this.updateSplitBars();
    this.renderEfficiencyChart();
  },

  bindEvents() {
    // Platform volume chips
    document.querySelectorAll('[data-voplatvol]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-voplatvol]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('voPlatformVol').value = Utils.formatNumber(parseInt(e.target.dataset.voplatvol));
        this.calculate();
      });
    });

    // User volume chips
    document.querySelectorAll('[data-vovol]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('[data-vovol]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById('voVolume').value = Utils.formatNumber(parseInt(e.target.dataset.vovol));
        this.calculate();
      });
    });

    // Input changes
    ['voPlatformVol', 'voVolume', 'voNumAccounts', 'voLevel', 'voGpPrice'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => this.calculate());
        el.addEventListener('change', () => this.calculate());
      }
    });

    // Volume splits
    for (let i = 0; i < 4; i++) {
      document.getElementById('voSplit' + i)?.addEventListener('input', () => {
        this.updateSplitBars();
        this.calculate();
      });
    }
  },

  updateSplitBars() {
    let total = 0;
    for (let i = 0; i < 4; i++) {
      const val = parseInt(document.getElementById('voSplit' + i)?.value) || 0;
      document.getElementById('voSplitBar' + i).style.width = val + '%';
      total += val;
    }
    const totalEl = document.getElementById('voSplitTotal');
    totalEl.textContent = 'Total: ' + total + '%';
    totalEl.className = 'vol-split-total ' + (total === 100 ? 'ok' : 'error');

    this.renderStackedBar();
  },

  renderStackedBar() {
    const bar = document.getElementById('voStackedBar');
    const legend = document.getElementById('voBarLegend');
    const labels = [i18n.t('stableStable'), i18n.t('stableNative'), i18n.t('majorPairs'), i18n.t('altLongTail')];

    let html = '';
    let legendHtml = '';

    for (let i = 0; i < 4; i++) {
      const val = parseInt(document.getElementById('voSplit' + i)?.value) || 0;
      if (val > 0) {
        html += `<div class="vol-stacked-seg" style="width:${val}%;background:${this.splitColors[i]}">${val > 10 ? val + '%' : ''}</div>`;
      }
      legendHtml += `<div class="vol-bar-legend-item"><div class="vol-bar-legend-dot" style="background:${this.splitColors[i]}"></div>${labels[i]}</div>`;
    }

    bar.innerHTML = html;
    legend.innerHTML = legendHtml;
  },

  getEfficiencyMult(volume) {
    for (const band of this.bands) {
      if (volume <= band.max) return band.mult;
    }
    return 0.75;
  },

  calculate() {
    const platformVol = Utils.parseNumber(document.getElementById('voPlatformVol').value);
    const userVol = Utils.parseNumber(document.getElementById('voVolume').value);
    const numAccounts = parseInt(document.getElementById('voNumAccounts').value) || 1;
    const level = parseInt(document.getElementById('voLevel').value) || 2;
    const gpPrice = parseFloat(document.getElementById('voGpPrice').value) || 0;

    if (!platformVol || !userVol) {
      this.clearKpis();
      return;
    }

    // Get splits (as percentages 0-100)
    const splits = [];
    let splitTotal = 0;
    for (let i = 0; i < 4; i++) {
      const val = parseInt(document.getElementById('voSplit' + i)?.value) || 0;
      splits.push(val);
      splitTotal += val;
    }

    if (splitTotal !== 100) {
      this.clearKpis();
      return;
    }

    // Calculate fees
    const levelFee = this.feeRates[level];
    const blendedFee = (splits[0] / 100) * this.stableFee + ((splits[1] + splits[2] + splits[3]) / 100) * levelFee;
    const totalFees = userVol * (blendedFee / 100);

    // Calculate user effective volume using GP multipliers
    // effVol = sum(rawVol * split_i * GP_MULT_i)
    let userEffVol = 0;
    let avgGpMult = 0;
    for (let i = 0; i < 4; i++) {
      userEffVol += userVol * (splits[i] / 100) * this.gpMult[i];
      avgGpMult += (splits[i] / 100) * this.gpMult[i];
    }

    // Efficiency band based on per-account volume
    const perAccountVol = userVol / numAccounts;
    const perAccountEffVol = userEffVol / numAccounts;
    const userMult = this.getEfficiencyMult(perAccountVol);

    // User score = effective volume * efficiency band multiplier
    const userScore = perAccountEffVol * userMult * numAccounts;

    // Rest of platform: (platformVol - userVol) at avgGpMult, then at 1.0x efficiency
    const restVol = Math.max(0, platformVol - userVol);
    const restEffVol = restVol * avgGpMult;
    const restScore = restEffVol * 1.0; // rest of platform at 1.0x efficiency

    // Total score and GP share
    const totalScore = userScore + restScore;
    const weeklyGp = totalScore > 0 ? Math.round(userScore * (this.weeklyPool / totalScore)) : 0;

    // Cost per GP
    const costPerGp = weeklyGp > 0 ? totalFees / weeklyGp : 0;

    // Airdrop value
    const airdropValue = gpPrice > 0 ? weeklyGp * gpPrice : 0;
    const netPnl = airdropValue - totalFees;

    // Update KPIs
    document.getElementById('voKpiGp').textContent = Utils.formatNumber(weeklyGp);
    document.getElementById('voKpiCostPerGp').textContent = '$' + costPerGp.toFixed(4);
    document.getElementById('voKpiFeeRate').textContent = blendedFee.toFixed(2) + '%';
    document.getElementById('voKpiFees').textContent = Utils.formatCurrency(totalFees);
    document.getElementById('voKpiValue').textContent = gpPrice > 0 ? Utils.formatCurrency(airdropValue) : '-';

    const netEl = document.getElementById('voKpiNet');
    if (gpPrice > 0) {
      netEl.textContent = Utils.formatCurrency(netPnl);
      netEl.style.color = netPnl >= 0 ? 'var(--positive)' : 'var(--danger)';
    } else {
      netEl.textContent = '-';
      netEl.style.color = 'var(--text-soft)';
    }

    // Multi-account comparison
    if (numAccounts > 1) {
      document.getElementById('voMultiCompare').style.display = 'block';
      const singleMult = this.getEfficiencyMult(userVol);
      const gain = ((effMult / singleMult) - 1) * 100;
      document.getElementById('voOptimalBlurb').innerHTML = gain > 0 ?
        `Splitting to ${numAccounts} accounts gives you <strong>${effMult.toFixed(2)}x</strong> efficiency vs <strong>${singleMult.toFixed(2)}x</strong> with 1 account (+${gain.toFixed(0)}% more GP)` :
        `Current split already optimal at <strong>${effMult.toFixed(2)}x</strong> efficiency`;
    } else {
      document.getElementById('voMultiCompare').style.display = 'none';
    }

    this.renderEfficiencyChart(perAccountVol);
  },

  clearKpis() {
    ['voKpiGp', 'voKpiCostPerGp', 'voKpiFeeRate', 'voKpiFees', 'voKpiValue', 'voKpiNet'].forEach(id => {
      document.getElementById(id).textContent = '-';
    });
    document.getElementById('voKpiNet').style.color = 'var(--text-soft)';
  },

  renderEfficiencyChart(userVol = 0) {
    const svg = document.getElementById('voChartSvg');
    const width = svg.clientWidth || 700;
    const height = 200;
    const pad = { top: 20, right: 16, bottom: 40, left: 52 };
    const chartW = width - pad.left - pad.right;
    const chartH = height - pad.top - pad.bottom;

    let html = '';

    // Y-axis grid
    for (let mult = 0.6; mult <= 1.4; mult += 0.2) {
      const y = pad.top + chartH * (1 - (mult - 0.5) / 1);
      html += `<line x1="${pad.left}" x2="${width - pad.right}" y1="${y}" y2="${y}" stroke="rgba(148,163,184,0.08)"/>`;
      html += `<text x="${pad.left - 5}" y="${y + 3.5}" text-anchor="end" fill="#6b7280" font-size="9">${mult.toFixed(1)}x</text>`;
    }

    // Y-axis label
    html += `<text x="12" y="${pad.top + chartH/2}" text-anchor="middle" fill="#6b7280" font-size="8" transform="rotate(-90, 12, ${pad.top + chartH/2})">Efficiency</text>`;

    // X-axis labels
    const xLabels = ['$0', '$100K', '$250K', '$500K', '$750K+'];
    const xPositions = [0, 0.133, 0.333, 0.667, 1];
    xPositions.forEach((pos, i) => {
      const x = pad.left + chartW * pos;
      html += `<text x="${x}" y="${height - 8}" text-anchor="middle" fill="#6b7280" font-size="9">${xLabels[i]}</text>`;
    });

    // Band rectangles
    const bandWidths = [0.133, 0.534, 0.333];
    let xStart = pad.left;

    this.bands.forEach((band, i) => {
      const w = chartW * bandWidths[i];
      const multY = pad.top + chartH * (1 - (band.mult - 0.5) / 1);
      const h = pad.top + chartH - multY;

      html += `<rect x="${xStart}" y="${multY}" width="${w}" height="${h}" fill="${band.color}" rx="3"/>`;
      html += `<text x="${xStart + w/2}" y="${multY + 14}" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="9" font-weight="600">${band.mult.toFixed(2)}x</text>`;
      html += `<text x="${xStart + w/2}" y="${multY + 26}" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="7.5">${band.label}</text>`;

      if (i < 2) {
        const lineX = xStart + w;
        html += `<line x1="${lineX}" x2="${lineX}" y1="${pad.top}" y2="${pad.top + chartH}" stroke="rgba(148,163,184,0.25)" stroke-width="1" stroke-dasharray="3 3"/>`;
      }

      xStart += w;
    });

    // User position indicator
    if (userVol > 0) {
      let userX;
      if (userVol < 100000) {
        userX = pad.left + (userVol / 100000) * chartW * 0.133;
      } else if (userVol < 500000) {
        userX = pad.left + chartW * 0.133 + ((userVol - 100000) / 400000) * chartW * 0.534;
      } else {
        userX = pad.left + chartW * 0.667 + Math.min((userVol - 500000) / 250000, 1) * chartW * 0.333;
      }
      const userMult = this.getEfficiencyMult(userVol);
      const userY = pad.top + chartH * (1 - (userMult - 0.5) / 1);

      html += `<line x1="${userX}" x2="${userX}" y1="${pad.top}" y2="${pad.top + chartH}" stroke="#22c9c9" stroke-width="2"/>`;
      html += `<circle cx="${userX}" cy="${userY}" r="6" fill="#22c9c9" stroke="#fff" stroke-width="2"/>`;
    }

    svg.innerHTML = html;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  }
};

// ============ Share & Export ============
document.getElementById('shareBtn')?.addEventListener('click', () => {
  const params = new URLSearchParams();
  params.set('gp', Utils.parseNumber(document.getElementById('userGp').value));
  params.set('cost', Utils.parseNumber(document.getElementById('farmingCost').value));
  params.set('supply', Utils.parseNumber(document.getElementById('totalGp').value));

  const url = window.location.origin + window.location.pathname + '?' + params.toString();
  navigator.clipboard.writeText(url).then(() => {
    showToast(i18n.t('linkCopied'));
  }).catch(() => {
    prompt('Copy this link:', url);
  });
});

document.getElementById('exportBtn')?.addEventListener('click', () => {
  showToast('Export requires html2canvas library');
});

// ============ Toast ============
function showToast(msg) {
  const toast = document.getElementById('shareToast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============ URL Params ============
function loadFromURL() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('gp')) {
    document.getElementById('userGp').value = Utils.formatNumber(parseInt(params.get('gp')));
  }
  if (params.has('cost')) {
    document.getElementById('farmingCost').value = Utils.formatNumber(parseInt(params.get('cost')));
  }
  if (params.has('supply')) {
    document.getElementById('totalGp').value = Utils.formatNumber(parseInt(params.get('supply')));
  }
}

// ============ Initialize ============
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
  Countdown.init();
  GPMatrix.init();
  VestingSimulator.init();
  VolumeOptimizer.init();
  loadFromURL();

  console.log('Genius GP Calculator loaded');
});
